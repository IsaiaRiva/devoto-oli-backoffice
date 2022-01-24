import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  navStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {
  }
}
