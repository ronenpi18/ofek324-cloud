import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { EssentialsSharedModule } from '@essentials/shared.module';
import { EssentialsHighlightModule } from '@essentials/components';

import { HelperClassesComponent } from 'app/main/ui/helper-classes/helper-classes.component';
import { HelperClassesPaddingMarginComponent } from 'app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component';
import { HelperClassesWidthHeightComponent } from 'app/main/ui/helper-classes/tabs/width-height/width-height.component';

const routes: Routes = [
    {
        path     : 'helper-classes',
        component: HelperClassesComponent
    }
];

@NgModule({
    declarations: [
        HelperClassesComponent,
        HelperClassesPaddingMarginComponent,
        HelperClassesWidthHeightComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,
        MatTabsModule,

        EssentialsSharedModule,
        EssentialsHighlightModule,
    ],
})
export class UIHelperClassesModule
{
}
