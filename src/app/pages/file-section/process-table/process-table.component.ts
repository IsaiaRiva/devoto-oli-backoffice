import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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

  dataSource: MatTableDataSource<ProcessData>;

  columns = [
    {
      columnDef: 'zip_name',
      header: 'File name',
      cell: (element: ProcessData) => element.zip_name
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: ProcessData) => element.date
    },
    {
      columnDef: 'validation',
      header: 'Validation',
      cell: (element: ProcessData) => element.validation
    },
    {
      columnDef: 'process_status',
      header: 'Process status',
      cell: (element: any) => 'active'
    },
   /*  {
      columnDef: 'process_angain',
      header: 'Process angain',
      cell: (element: any) => 'franco'
    },
    {
      columnDef: 'back_to_import',
      header: 'Back to import',
      cell: (element: any) => 'beppe'
    } */
  ];

  displayedColumns = this.columns.map(c => c.columnDef);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
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
}