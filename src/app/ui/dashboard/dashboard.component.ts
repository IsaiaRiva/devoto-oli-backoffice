import { Component} from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="side" [opened]="navStatus | async" >
        <div class="df header">
          <h3 class="title">BACK OFFICE</h3>
          <button
            mat-mini-fab
            class="btn-nav"
            *ngIf="navStatus | async"
            (click)="navStatus.next(false)">
            <mat-icon>highlight_off</mat-icon>
          </button>
        </div>
        <app-page></app-page>
      </mat-sidenav>
      <mat-sidenav-content *ngIf="(navStatus | async) === (false)">
        <app-compact-page></app-compact-page>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    mat-sidenav-container {
      min-height: 100vh;
      background-color: var(--white)
    }
    mat-sidenav {
      width: 11rem;
      background-color: var(--white);
      position: fixed;
    }
    mat-sidenav {
      padding: 15px 5px;
    }
    mat-sidenav-content {
      background-color: var(--white);
      margin: 15px 0px;
      padding: 10px;
    }
    .mat-drawer-side {
     border-right: none;
    }
    .mat-drawer-content {
      height: 100vh;
    }
    .header {
      margin: 15px 0px 35px 0px;
      padding: 4px;
    }
  `]
})

export class DashboardComponent {
  navStatus = this.ds.navStatus;

  constructor(
    private ds: DashboardService
  ) {}
}
