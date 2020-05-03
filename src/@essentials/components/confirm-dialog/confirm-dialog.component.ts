import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector   : 'essentials-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class EssentialsConfirmDialogComponent
{
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<EssentialsConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<EssentialsConfirmDialogComponent>
    )
    {
    }

}
