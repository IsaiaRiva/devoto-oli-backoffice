import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {},
    private dialogRef: MatDialogRef<UploadComponent>,
  ) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }

}
