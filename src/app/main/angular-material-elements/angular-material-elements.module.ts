import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EssentialsSharedModule } from '@essentials/shared.module';
import { EssentialsHighlightModule } from '@essentials/components/index';
import { EssentialsWidgetModule } from '@essentials/components/widget/widget.module';

import { MaterialModule } from 'app/main/angular-material-elements/material.module';
import { EXAMPLE_LIST } from 'app/main/angular-material-elements/example-components';
import { AngularMaterialElementsComponent } from 'app/main/angular-material-elements/angular-material-elements.component';
import { ExampleViewerComponent } from 'app/main/angular-material-elements/example-viewer/example-viewer';

const routes: Routes = [
    {
        path    : '',
        children: [
            {
                path     : ':id',
                component: AngularMaterialElementsComponent
            }
        ]
    }
];

@NgModule({
    declarations   : [
        [...EXAMPLE_LIST],
        AngularMaterialElementsComponent,
        ExampleViewerComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MaterialModule,

        EssentialsSharedModule,
        EssentialsHighlightModule,
        EssentialsWidgetModule
    ],
    entryComponents: EXAMPLE_LIST,
})
export class AngularMaterialElementsModule
{
}

