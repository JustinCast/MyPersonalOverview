import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public title: string;
  public message: string;
  constructor(public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit() {
  }

}
