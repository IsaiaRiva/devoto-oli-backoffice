import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesMngComponent } from './pages/devices-mng/devices-mng.component';
import { InportFileMngComponent } from './pages/file-section/inport-file-mng/inport-file-mng.component';
import { ProcessTableComponent } from './pages/file-section/process-table/process-table.component';

const routes: Routes = [
  { path: '',   redirectTo: 'devices-mng', pathMatch: 'full'},
  { path: 'devices-mng', component: DevicesMngComponent },
  { path: 'inport-file-mng', component: InportFileMngComponent },
  { path: 'process-table', component: ProcessTableComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
