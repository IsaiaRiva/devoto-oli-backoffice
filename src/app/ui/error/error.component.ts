import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrMsg } from './error';
import { ApiHelperService } from 'src/app/services/helper/api-helper.service';

@Component({
  selector: 'app-error',
  template: `
  `,
  styles: [``]
})
export class ErrorComponent implements OnDestroy {

  constructor(
    private snackBar: MatSnackBar,
    private apiS: ApiHelperService
  ) {
    this.apiS.ErrSub.subscribe(err => {
      this.showErr(err);
    });
  }

  showErr(err: ErrMsg, action: string = 'Chiudi'): void {
    if (typeof err === 'string') {
      this.snackBar.open(err, action);
    } else {
      const message = err.errorManagement.errorDescription;
      this.snackBar.open(message, action);
    }
  }

  ngOnDestroy(): void {
    // [ ] TODO check if does it work
    this.apiS.ErrSub.unsubscribe();
  }
}
