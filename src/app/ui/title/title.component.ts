import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1 class="title df custom">{{title}}</h1>
  `,
  styles: [`
    .custom {
      font-size: 42px !important;
      margin-bottom: 26px !important;
    }
  `]
})
export class TitleComponent implements OnInit {
@Input() title: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
