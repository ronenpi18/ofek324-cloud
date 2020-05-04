import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { EssentialsSharedModule } from '@essentials/shared.module';
import { EssentialsDemoModule } from '@essentials/components/demo/demo.module';

import { ColorsComponent } from 'app/main/ui/colors/colors.component';

const routes: Routes = [
    {
        path     : 'colors',
        component: ColorsComponent
    }
];

@NgModule({
    declarations: [
        ColorsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,
        MatTabsModule,

        EssentialsSharedModule,
        EssentialsDemoModule
    ]
})
export class UIColorsModule
{
}
