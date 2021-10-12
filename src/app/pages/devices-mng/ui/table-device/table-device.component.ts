import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-device',
  template: `
    <ng-container *ngIf="userCase">
      <p>{{data}}</p>
    </ng-container>
    <ng-container *ngIf="deviceCase">
      <ng-container *ngFor="let item of data">
        <div class="devices-container">
          <p class="device">{{item.id}}) {{item.device}} - {{item.version}}
            <button>
              <mat-icon>delete_outline</mat-icon>
            </button>
          </p>
        </div>
      </ng-container>
    </ng-container>
  `,
  styles: [`
  button {
    border: none;
    background-color: transparent
  }
  .device {
    display: flex;
    justify-content: space-between;
    margin: 15px 4px;
  }
  `]
})
export class TableDeviceComponent implements OnInit {
  @Input() column: string | undefined;
  // type Device[] or string
  @Input() data: any;
  userCase = false;
  deviceCase = false;
  constructor() {}

  ngOnInit(): void {
    switch (this.column) {
      case 'User':
        this.userCase = true;
        break;
      case 'Devices':
        this.deviceCase = true;
        break;
    }
  }
}

