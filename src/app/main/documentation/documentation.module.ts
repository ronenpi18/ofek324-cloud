import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { EssentialsSharedModule } from '@essentials/shared.module';

import { DocsChangelogComponent } from 'app/main/documentation/changelog/changelog.component';

const routes: Routes = [
    {
        path     : 'changelog',
        component: DocsChangelogComponent
    },
    {
        path        : 'getting-started',
        loadChildren: './getting-started/getting-started.module#GettingStartedModule'
    },
    {
        path        : 'working-with-essentials',
        loadChildren: './working-with-essentials/working-with-essentials.module#WorkingWithEssentialsModule'
    },
    {
        path        : 'components',
        loadChildren: './components/components.module#ComponentsModule'
    },
    {
        path        : 'components-third-party',
        loadChildren: './components-third-party/components-third-party.module#ComponentsThirdPartyModule'
    },
    {
        path        : 'directives',
        loadChildren: './directives/directives.module#DirectivesModule'
    },
    {
        path        : 'services',
        loadChildren: './services/services.module#ServicesModule'
    }
];

@NgModule({
    declarations: [
        DocsChangelogComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        EssentialsSharedModule
    ]
})
export class DocumentationModule
{
}
