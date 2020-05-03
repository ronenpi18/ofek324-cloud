import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';

import { EssentialsNavigationComponent } from './navigation.component';
import { EssentialsNavVerticalItemComponent } from './vertical/item/item.component';
import { EssentialsNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { EssentialsNavVerticalGroupComponent } from './vertical/group/group.component';
import { EssentialsNavHorizontalItemComponent } from './horizontal/item/item.component';
import { EssentialsNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        EssentialsNavigationComponent
    ],
    declarations: [
        EssentialsNavigationComponent,
        EssentialsNavVerticalGroupComponent,
        EssentialsNavVerticalItemComponent,
        EssentialsNavVerticalCollapsableComponent,
        EssentialsNavHorizontalItemComponent,
        EssentialsNavHorizontalCollapsableComponent
    ]
})
export class EssentialsNavigationModule
{
}
