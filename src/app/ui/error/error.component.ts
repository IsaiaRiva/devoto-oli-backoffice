import { AfterViewInit, Component } from '@angular/core';
import { MatSnackBar, MatSnackBarRef  } from '@angular/material/snack-bar';
import { ErrMsg } from './error';
import { ApiHelperService } from 'src/app/services/helper/api-helper.service';

@Component({
  selector: 'app-error',
  template: `
  `,
  styles: [``]
})
export class ErrorComponent implements AfterViewInit {

  constructor(
    private snackBar: MatSnackBar,
    private apiS: ApiHelperService,
  ) {
    const $err = this.apiS.ErrSub.subscribe(err => {
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

  ngAfterViewInit(): void {
    this.snackBar._openedSnackBarRef?.onAction().subscribe(() => {
      console.log('The snackbar action was triggered!');
      // $err.unsubscribe();
    });
  }
}
