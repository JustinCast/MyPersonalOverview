import { Injectable } from '@angular/core';

//Manual imports
import { MatDialogRef, MatDialog, MatDialogConfig } from "@angular/material";
import { Observable } from "rxjs/Rx";
import { HireMeComponent } from "./hire-me.component";
@Injectable()
export class HireMeDialogService {

  constructor(private dialog: MatDialog) { }

  public openDialog(title: string, message: string) {
    let dialogRef: MatDialogRef<HireMeComponent>
    dialogRef = this.dialog.open(HireMeComponent, {
      width: '500px',
      data: {name: 'Hire Me!'}
    })
    dialogRef.componentInstance.title = title
    dialogRef.componentInstance.message = message

    return dialogRef.afterClosed()
  }
}
