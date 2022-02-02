import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { DictionaryService } from 'src/app/services/dictionary/dictionary.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  file: NgxFileDropEntry | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {},
    private dialogRef: MatDialogRef<UploadComponent>,
    private ds: DictionaryService,
    private snackBar: MatSnackBar,
  ) { }

  dropped(files: NgxFileDropEntry[]): void {
    if (files.length !== 1) {
      return;
    }
    this.file = files.pop();
  }

  close(): void {
    this.dialogRef.close();
  }

  upload(): void {
    console.log(this.file);
    if (!this.file) {
      const msg = 'Bisogna selezionare un file per poterlo caricare';
      this.snackBar.open( msg, 'Chiudi', { duration: 10000 });
      return;
    }

    if (this.file.fileEntry.isFile) {
      const fileEntry = this.file.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        const formData = new FormData();
        formData.append('file', file, this.file?.relativePath);
        this.ds.uploadDictionary(formData).subscribe(console.log);
      });
    }

  }
}
