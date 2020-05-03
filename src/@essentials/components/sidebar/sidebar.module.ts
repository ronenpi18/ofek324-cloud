import { NgModule } from '@angular/core';

import { EssentialsSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        EssentialsSidebarComponent
    ],
    exports     : [
        EssentialsSidebarComponent
    ]
})
export class EssentialsSidebarModule
{
}
