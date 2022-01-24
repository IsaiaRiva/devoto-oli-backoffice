import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesMngComponent } from './pages/devices-mng/devices-mng.component';
import { ProcessTableComponent } from './pages/file-section/process-table/process-table.component';

const routes: Routes = [
  { path: '',   redirectTo: 'devices-mng', pathMatch: 'full'},
  { path: 'devices-mng', component: DevicesMngComponent },
  { path: 'process-table', component: ProcessTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
