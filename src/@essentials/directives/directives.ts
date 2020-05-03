import { NgModule } from '@angular/core';

import { EssentialsIfOnDomDirective } from '@essentials/directives/essentials-if-on-dom/essentials-if-on-dom.directive';
import { EssentialsInnerScrollDirective } from '@essentials/directives/essentials-inner-scroll/essentials-inner-scroll.directive';
import { EssentialsPerfectScrollbarDirective } from '@essentials/directives/essentials-perfect-scrollbar/essentials-perfect-scrollbar.directive';
import { EssentialsMatSidenavHelperDirective, EssentialsMatSidenavTogglerDirective } from '@essentials/directives/essentials-mat-sidenav/essentials-mat-sidenav.directive';

@NgModule({
    declarations: [
        EssentialsIfOnDomDirective,
        EssentialsInnerScrollDirective,
        EssentialsMatSidenavHelperDirective,
        EssentialsMatSidenavTogglerDirective,
        EssentialsPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        EssentialsIfOnDomDirective,
        EssentialsInnerScrollDirective,
        EssentialsMatSidenavHelperDirective,
        EssentialsMatSidenavTogglerDirective,
        EssentialsPerfectScrollbarDirective
    ]
})
export class EssentialsDirectivesModule
{
}
