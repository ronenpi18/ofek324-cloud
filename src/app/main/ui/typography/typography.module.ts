import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { EssentialsSharedModule } from '@essentials/shared.module';
import { EssentialsHighlightModule } from '@essentials/components';

import { TypographyComponent } from 'app/main/ui/typography/typography.component';
import { TypographyHeadingsComponent } from 'app/main/ui/typography/tabs/headings/headings.component';
import { TypographyInlineTextElementsComponent } from 'app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component';
import { TypographyBlockquotesListsComponent } from 'app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component';
import { TypographyMessageBoxesComponent } from 'app/main/ui/typography/tabs/message-boxes/message-boxes.component';
import { TypographyHelpersComponent } from 'app/main/ui/typography/tabs/helpers/helpers.component';

const routes: Routes = [
    {
        path     : 'typography',
        component: TypographyComponent
    }
];

@NgModule({
    declarations: [
        TypographyComponent,
        TypographyHeadingsComponent,
        TypographyInlineTextElementsComponent,
        TypographyBlockquotesListsComponent,
        TypographyMessageBoxesComponent,
        TypographyHelpersComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,
        MatTabsModule,

        EssentialsSharedModule,
        EssentialsHighlightModule
    ]
})
export class UITypographyModule
{
}
