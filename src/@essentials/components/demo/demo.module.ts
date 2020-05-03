import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { EssentialsDemoContentComponent } from './demo-content/demo-content.component';
import { EssentialsDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';

@NgModule({
    declarations: [
        EssentialsDemoContentComponent,
        EssentialsDemoSidebarComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports     : [
        EssentialsDemoContentComponent,
        EssentialsDemoSidebarComponent
    ]
})
export class EssentialsDemoModule
{
}
