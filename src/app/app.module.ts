import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { MatTableExporterModule } from 'mat-table-exporter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevicesMngComponent } from './pages/devices-mng/devices-mng.component';
import { InportFileMngComponent } from './pages/file-section/inport-file-mng/inport-file-mng.component';
import { ProcessTableComponent } from './pages/file-section/process-table/process-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesMenuComponent } from './ui/pages-menu/pages-menu.component';
import {HttpClientModule } from '@angular/common/http';
import { TableDeviceComponent } from './pages/devices-mng/ui/table-device/table-device.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';

import { NgxFileDropModule } from 'ngx-file-drop';
import { FooterComponent } from './ui/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DevicesMngComponent,
    InportFileMngComponent,
    ProcessTableComponent,
    DashboardComponent,
    PagesMenuComponent,
    TableDeviceComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    DragDropModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    HttpClientModule,
    MatTableExporterModule,
    NgxFileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
