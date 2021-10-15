import { Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { PAGES } from '../../models/pages';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-pages-menu',
  template: `
    <ng-container *ngFor="let item of pagesArray, let i = index">
      <div style="margin-top: 35px;">
        <mat-accordion>
          <mat-expansion-panel hideToggle [expanded]="expanded[i].isExpanded" >
            <mat-expansion-panel-header (click)="expand(i)">
              <mat-panel-title>
                    <p><a>{{item.pageName}}</a></p>
              </mat-panel-title>
            </mat-expansion-panel-header>
              <ng-container *ngFor="let section of item.section, let i = index">
                <p class="df">
                  <a class="df" [routerLink]="section.route">
                    <mat-icon class="icon">description</mat-icon>
                    {{section.name}}
                  </a>
                </p>
              </ng-container>
          </mat-expansion-panel>
        </mat-accordion>
      </div>
    </ng-container>
  `,
  styles: [`
    mat-panel-title p {
      margin: auto;
      color: var(--very-dark);
      font-family: var(--normal);
      letter-spacing: 1px;
      font-style: italic;
      font-size: 19px;
      font-weight: bolder;
    }
    .icon{
      margin-right: 5px;
      color: var(--very-dark);
    }
    a {
      text-decoration: none;
      color: var(--very-dark);
      font-family: var(--normal);
      font-size: 17px;
    }
    `]
})
export class PagesMenuComponent implements OnDestroy{
  pagesArray = PAGES;
  expanded = this.ds.pannelStatus.getValue();
  sub: Subscription;

  constructor(
    private ds: DashboardService
  ) {
    this.sub = this.ds.pannelStatus.subscribe( next => {
      this.expanded = next;
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  expand(i: number) {
    this.expanded[i].isExpanded = !this.expanded[i].isExpanded;
    this.ds.pannelStatus.next(this.expanded);
  }
}

