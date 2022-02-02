import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DevicesService } from './services-test/devices.service';
import { Devicedata } from 'src/app/models/device-data';
import { Subscription } from 'rxjs';
import { DEVICE_TAB_DEF } from './columns';

@Component({
  selector: 'app-devices-mng',
  templateUrl: './devices-mng.component.html',
  styleUrls: ['./devices-mng.component.scss']
})
export class DevicesMngComponent implements OnDestroy, AfterViewInit{
  title = 'Browser';
  data: Devicedata[] = [];
  dataSource: MatTableDataSource<Devicedata> = new MatTableDataSource<Devicedata>([]);
  columns = DEVICE_TAB_DEF;
  displayedColumns = this.columns.map(c => c.columnDef);

  @ViewChild(MatSort) sort: MatSort | undefined;
  sub: Subscription | undefined;

  constructor(
    private ds: DevicesService
  ) {
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.sub = this.ds.getDevicesTable()
    .subscribe(
      next => {
        // this.data = next;
        // this.dataSource = new MatTableDataSource(this.data);
        // this.sort && (this.dataSource.sort = this.sort);
      });
  }
}
