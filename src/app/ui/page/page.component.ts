import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PAGE } from './page';

@Component({
  selector: 'app-page',
  template: `
  <div class="pages">
    <ng-container *ngFor="let page of pages">
      <button
        class="df btn nav-btn {{'no-focus-'+page.color}}"
        [ngClass]="{'logout': page.icon === 'logout'}"
        [routerLink]="page.route"
        [routerLinkActive]="'btn-'+page.color"
      >
        <span class="material-icons" style="margin-right: 10px">{{page.icon}}</span>
        <span class="name">{{page.name}}</span>
      </button>
    </ng-container>
  </div>

  `,
  styles: [`
  .pages {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .name {
    margin-top: 3px;
  }
  `]
})
export class PageComponent implements OnInit {
  pages = PAGE;
  constructor(
  ) { }

  ngOnInit(): void {
  }
}
