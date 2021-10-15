import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DevicesService } from './services/devices.service';
import { Devicedata } from 'src/app/models/device-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-devices-mng',
  templateUrl: './devices-mng.component.html',
  styleUrls: ['./devices-mng.component.scss']
})
export class DevicesMngComponent implements OnDestroy, AfterViewInit{

  data: Devicedata[] = [];
  dataSource: MatTableDataSource<Devicedata> = new MatTableDataSource<Devicedata>([]);

  columns = [
    {
      columnDef: 'user',
      header: 'User',
      cell: (element: Devicedata) => element.username
    },
    {
      columnDef: 'numberOfDevices',
      header: 'Num.',
      cell: (element: Devicedata) => element.devices.length
    },
    {
      columnDef: 'devices',
      header: 'Devices',
      cell: (element: Devicedata) => element.devices
    }
  ];

  displayedColumns = this.columns.map(c => c.columnDef);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
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
        this.data = next;
        this.dataSource = new MatTableDataSource(this.data);
        this.paginator && (this.dataSource.paginator = this.paginator);
        this.sort && (this.dataSource.sort = this.sort);
      });
  }

  applyFilter(event: Event): void {
    if (!this.dataSource) {
      return;
    }
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
