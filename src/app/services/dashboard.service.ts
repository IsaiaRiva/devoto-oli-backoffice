import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { NavMenu } from '../models/nav-menu';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  navMenu: NavMenu[] = [
      {isExpanded: false},
      {isExpanded: false}
  ];
  navStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  pannelStatus: BehaviorSubject<NavMenu[]> = new BehaviorSubject<NavMenu[]>(this.navMenu);

  constructor() {}
}