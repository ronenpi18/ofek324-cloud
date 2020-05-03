import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EssentialsSharedModule } from '@essentials/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        EssentialsSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
