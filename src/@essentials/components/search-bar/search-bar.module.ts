import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { EssentialsSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        EssentialsSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        EssentialsSearchBarComponent
    ]
})
export class EssentialsSearchBarModule
{
}
