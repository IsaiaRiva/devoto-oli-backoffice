import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UploadComponent } from 'src/app/ui/upload/upload/upload.component';
import { PROCESS_TAB_DEF } from './columns';
import { ProcessService } from './services/process.service';

export type ProcessData = {
    zip_name: string,
    date: string,
    validation: boolean,
    process_status: string
};

@Component({
  selector: 'app-process-table',
  templateUrl: './process-table.component.html',
  styleUrls: ['./process-table.component.scss']
})

export class ProcessTableComponent implements AfterViewInit{
  data: ProcessData[] = [
    {
      zip_name: 'bill.zip',
      date: '21/06/2018',
      validation: true,
      process_status: 'active'
    }];

  title = 'Dizionari';
  isWatching = this.ps.isWatching;
  dataSource: MatTableDataSource<ProcessData>;
  columns = PROCESS_TAB_DEF;
  displayedColumns = this.columns.map(c => c.columnDef);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
    private dialog: MatDialog,
    private ps: ProcessService,
  ) {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.paginator && (this.dataSource.paginator = this.paginator);
    this.sort && (this.dataSource.sort = this.sort);
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

  openUpload(): void {
    const dialog = this.dialog.open(UploadComponent, { data: {}});
  }
}
