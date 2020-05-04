import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { EssentialsSharedModule } from '@essentials/shared.module';
import { EssentialsHighlightModule } from '@essentials/components';

import { DocsWorkingWithEssentialsServerComponent } from 'app/main/documentation/working-with-essentials/server/server.component';
import { DocsWorkingWithEssentialsProductionComponent } from 'app/main/documentation/working-with-essentials/production/production.component';
import { DocsWorkingWithEssentialsDirectoryStructureComponent } from 'app/main/documentation/working-with-essentials/directory-structure/directory-structure.component';
import { DocsWorkingWithEssentialsUpdatingEssentialsComponent } from 'app/main/documentation/working-with-essentials/updating-essentials/updating-essentials.component';
import { DocsWorkingWithEssentialsMultiLanguageComponent } from 'app/main/documentation/working-with-essentials/multi-language/multi-language.component';
import { DocsWorkingWithEssentialsMaterialThemingComponent } from 'app/main/documentation/working-with-essentials/material-theming/material-theming.component';
import { DocsWorkingWithEssentialsThemeLayoutsComponent } from 'app/main/documentation/working-with-essentials/theme-layouts/theme-layouts.component';
import { DocsWorkingWithEssentialsPageLayoutsComponent } from 'app/main/documentation/working-with-essentials/page-layouts/page-layouts.component';

const routes = [
    {
        path     : 'server',
        component: DocsWorkingWithEssentialsServerComponent
    },
    {
        path     : 'production',
        component: DocsWorkingWithEssentialsProductionComponent
    },
    {
        path     : 'directory-structure',
        component: DocsWorkingWithEssentialsDirectoryStructureComponent
    },
    {
        path     : 'updating-essentials',
        component: DocsWorkingWithEssentialsUpdatingEssentialsComponent
    },
    {
        path     : 'multi-language',
        component: DocsWorkingWithEssentialsMultiLanguageComponent
    },
    {
        path     : 'material-theming',
        component: DocsWorkingWithEssentialsMaterialThemingComponent
    },
    {
        path     : 'theme-layouts',
        component: DocsWorkingWithEssentialsThemeLayoutsComponent
    },
    {
        path     : 'page-layouts',
        component: DocsWorkingWithEssentialsPageLayoutsComponent
    }
];

@NgModule({
    declarations: [
        DocsWorkingWithEssentialsServerComponent,
        DocsWorkingWithEssentialsProductionComponent,
        DocsWorkingWithEssentialsDirectoryStructureComponent,
        DocsWorkingWithEssentialsUpdatingEssentialsComponent,
        DocsWorkingWithEssentialsMaterialThemingComponent,
        DocsWorkingWithEssentialsMultiLanguageComponent,
        DocsWorkingWithEssentialsThemeLayoutsComponent,
        DocsWorkingWithEssentialsPageLayoutsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        EssentialsSharedModule,
        EssentialsHighlightModule
    ]
})
export class WorkingWithEssentialsModule
{
}
