import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { EssentialsSharedModule } from '@essentials/shared.module';
import { EssentialsHighlightModule } from '@essentials/components';

import { DocsDirectivesEssentialsIfOnDomComponent } from 'app/main/documentation/directives/essentialsIfOnDom/essentials-if-on-dom.component';
import { DocsDirectivesEssentialsInnerScrollComponent } from 'app/main/documentation/directives/essentialsInnerScroll/essentials-inner-scroll.component';
import { DocsDirectivesEssentialsMatSidenavComponent } from 'app/main/documentation/directives/essentialsMatSidenav/essentials-mat-sidenav.component';
import { DocsDirectivesEssentialsPerfectScrollbarComponent } from 'app/main/documentation/directives/essentialsPerfectScrollbar/essentials-perfect-scrollbar.component';

const routes = [
    {
        path     : 'essentials-if-on-dom',
        component: DocsDirectivesEssentialsIfOnDomComponent
    },
    {
        path     : 'essentials-inner-scroll',
        component: DocsDirectivesEssentialsInnerScrollComponent
    },
    {
        path     : 'essentials-mat-sidenav',
        component: DocsDirectivesEssentialsMatSidenavComponent
    },
    {
        path     : 'essentials-perfect-scrollbar',
        component: DocsDirectivesEssentialsPerfectScrollbarComponent
    }
];

@NgModule({
    declarations: [
        DocsDirectivesEssentialsIfOnDomComponent,
        DocsDirectivesEssentialsInnerScrollComponent,
        DocsDirectivesEssentialsMatSidenavComponent,
        DocsDirectivesEssentialsPerfectScrollbarComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        EssentialsSharedModule,
        EssentialsHighlightModule
    ]
})
export class DirectivesModule
{
}
