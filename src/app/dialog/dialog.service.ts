import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { DialogComponent } from './dialog.component';
@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<DialogComponent>
    dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',
        data: { name: 'Ups!' }
    }); 
    dialogRef.componentInstance.title = title
    dialogRef.componentInstance.message = message

    return dialogRef.afterClosed()
  }

}
