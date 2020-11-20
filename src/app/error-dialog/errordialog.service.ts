import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrordialogComponent } from './errordialog.component';

@Injectable()
export class ErrorDialogService {
    public isDialogOpen = false;
    constructor(public dialog: MatDialog) { }

    openDialog(data): any {
        if (this.isDialogOpen) {
            return false;
        }
        this.isDialogOpen = true;
        const dialogRef = this.dialog.open(ErrordialogComponent, {
            width: '300px',
            data
        });

        dialogRef.afterClosed().subscribe(result => {
            this.isDialogOpen = false;
            let animal;
            animal = result;
        });
    }
}
