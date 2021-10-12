import { Component} from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="side" [opened]="navStatus | async" >
        <div class="header">
          <h3 class="title">BackOffice</h3>
          <button
            mat-mini-fab
            class="btn-nav"
            *ngIf="navStatus | async"
            (click)="navStatus.next(false)">
            <mat-icon>arrow_back</mat-icon>
          </button>
        </div>
        <app-pages-menu></app-pages-menu>
      </mat-sidenav>
      <mat-sidenav-content *ngIf="(navStatus | async) === (false)">
        <div cdkDrag id="openNavBtn">
          <button
            mat-mini-fab
            class="btn-nav"
            (click)="navStatus.next(true)">
            <mat-icon>menu_open</mat-icon>
          </button>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    mat-sidenav-container {
      min-height: 100vh;
      background-color: var(--light)
    }
    mat-sidenav {
      width: 13rem;
      background-color: var(--light-dark)
    }
    mat-sidenav, mat-sidenav-content {
      padding: 15px;
    }
    mat-sidenav-content {
      background-color: var(--light)
    }
    .btn-nav {
      background-color: var(--very-dark);
      box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.25);
    }
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 35px;
    }
    .title {
      margin: auto;
      font-size: 25px;
      color: var(--very-light);
    }
  `]
})

export class DashboardComponent {
  navStatus = this.ds.navStatus;

  constructor(
    private ds: DashboardService
  ) {}
}
