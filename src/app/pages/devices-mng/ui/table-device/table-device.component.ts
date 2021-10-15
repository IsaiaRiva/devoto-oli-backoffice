import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-device',
  template: `
    <ng-container *ngIf="userCase">
      <p class="user">{{data}}</p>
    </ng-container>

    <ng-container *ngIf="devicesCase">
      <ng-container *ngFor="let item of data">
        <div class="devices-container">
          <div  class="device">
            <p>
              Device: <strong>{{item.device | uppercase}}</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Version: <strong>{{item.version | uppercase}}</strong>
            </p>
            <button class="d-btn">
              <mat-icon>delete_outline</mat-icon>
            </button>
          </div>
        </div>
      </ng-container>
    </ng-container>

    <ng-container *ngIf="numDevices">
      <p class="df"><strong style="opacity: .8;">n. {{data}}</strong></p>
    </ng-container>
  `,
  styles: [`
  button {
    border: none;
    background-color: transparent;
    border-radius: 50%;
  }
  .device {
    display: flex;
    padding: 1px;
    justify-content: space-between;
  }
  .d-btn:hover {
    background-color: var(--very-dark-lo);
  }
  .user {
    font-style: italic;
  }
  `]
})
export class TableDeviceComponent implements OnInit {
  @Input() column: string | undefined;
  // type Device[] or string
  @Input() data: any;
  userCase = false;
  devicesCase = false;
  numDevices = false;
  constructor() {}

  ngOnInit(): void {
    switch (this.column) {
      case 'User':
        this.userCase = true;
        break;
      case 'Devices':
        this.devicesCase = true;
        break;
      case 'Num.':
        this.numDevices = true;
      break;
    }
  }
}

