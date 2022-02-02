import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DictionaryService } from 'src/app/services/dictionary/dictionary.service';
import { UploadComponent } from 'src/app/ui/upload/upload/upload.component';
import { PROCESS_TAB_DEF } from './columns';
import { Dictionary, DictionaryData } from './dictionary-data';
import { ProcessService } from './services/process.service';

@Component({
  selector: 'app-process-table',
  templateUrl: './process-table.component.html',
  styleUrls: ['./process-table.component.scss']
})

export class ProcessTableComponent implements AfterViewInit, OnDestroy {

  title = 'Dizionari';
  isWatching = this.ps.isWatching;
  data: Dictionary[] = [];
  dataSource: MatTableDataSource<Dictionary> = new MatTableDataSource<Dictionary>([]);
  columns = PROCESS_TAB_DEF;
  displayedColumns = this.columns.map(c => c.columnDef);
  sub: Subscription | undefined;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
    private dialog: MatDialog,
    private ps: ProcessService,
    private ds: DictionaryService
  ) { 
  }

  ngAfterViewInit(): void {
    this.sub = this.ds.getDictionaryImportHistory()
      .subscribe(
        next => {
          this.data = next.importHistoryList;
          this.dataSource = new MatTableDataSource(this.data);
          this.paginator && (this.dataSource.paginator = this.paginator);
          this.sort && (this.dataSource.sort = this.sort);
        });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
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
    this.dialog.open(UploadComponent, { data: {} });
  }
}
