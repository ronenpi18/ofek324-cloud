import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { EssentialsConfirmDialogComponent } from '@essentials/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        EssentialsConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        EssentialsConfirmDialogComponent
    ],
})
export class EssentialsConfirmDialogModule
{
}
