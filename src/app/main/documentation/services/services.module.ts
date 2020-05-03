import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { EssentialsSharedModule } from '@essentials/shared.module';
import { EssentialsHighlightModule } from '@essentials/components/index';

import { EssentialsConfigServiceDocsComponent } from 'app/main/documentation/services/essentials-config/essentials-config.component';
import { EssentialsSplashScreenServiceDocsComponent } from 'app/main/documentation/services/essentials-splash-screen/essentials-splash-screen.component';

const routes = [
    {
        path     : 'essentials-config',
        component: EssentialsConfigServiceDocsComponent
    },
    {
        path     : 'essentials-splash-screen',
        component: EssentialsSplashScreenServiceDocsComponent
    }
];

@NgModule({
    declarations: [
        EssentialsConfigServiceDocsComponent,
        EssentialsSplashScreenServiceDocsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        EssentialsSharedModule,
        EssentialsHighlightModule
    ]
})

export class ServicesModule
{
}
