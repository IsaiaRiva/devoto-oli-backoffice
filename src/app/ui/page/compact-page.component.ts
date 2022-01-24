import { Component } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { PAGE } from './page';

@Component({
  selector: 'app-compact-page',
  template: `
    <div class="df cpage">
      <button
          class="cbtn btn btn-azure"
          style="margin: 10px 0px 25px 0px"
          (click)="navStatus.next(true)"
          >
          <span class="material-icons cicon">menu</span>
        </button>
      <ng-container *ngFor="let page of pages">
        <button
          class="cbtn btn {{'no-focus-' + page.color}}"
          [routerLink]="page.route"
          [routerLinkActive]="'btn-'+page.color"
          [ngClass]="{'clogout': page.icon === 'logout'}"
          >
          <span
          class="material-icons cicon"
          [ngClass]="{'left': page.icon === 'logout'}"
          >{{page.icon}}</span>
        </button>
      </ng-container>
    </div>
  `,
  styles: [`
  .cpage {
    flex-flow: column wrap;
  }
  .cbtn {
    margin: 0px 0px 15px 0px;
    min-width: 58px;
    border-radius: 20px;
    padding: 3px 15px;
  }
  .cicon {
    position: relative;
    top: 2px;
  }
  .left {
    left: 4px;
  }
  `]
})
export class CompactPageComponent {
  navStatus = this.ds.navStatus;
  pages = PAGE;

  constructor(
    private ds: DashboardService
  ) { }
}
