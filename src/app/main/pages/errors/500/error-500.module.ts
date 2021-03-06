import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EssentialsSharedModule } from '@essentials/shared.module';

import { Error500Component } from 'app/main/pages/errors/500/error-500.component';

const routes = [
    {
        path     : 'errors/error-500',
        component: Error500Component
    }
];

@NgModule({
    declarations: [
        Error500Component
    ],
    imports     : [
        RouterModule.forChild(routes),

        EssentialsSharedModule
    ]
})
export class Error500Module
{
}
