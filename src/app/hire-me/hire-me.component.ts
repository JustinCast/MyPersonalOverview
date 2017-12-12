import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.scss']
})
export class HireMeComponent implements OnInit {
  public title: string
  public message: string
  
  constructor(public dialogRef: MatDialogRef<HireMeComponent>) { }
  ngOnInit() {
  }

}
