import { NgModule } from '@angular/core';

import { EssentialsWidgetComponent } from './widget.component';
import { EssentialsWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        EssentialsWidgetComponent,
        EssentialsWidgetToggleDirective
    ],
    exports     : [
        EssentialsWidgetComponent,
        EssentialsWidgetToggleDirective
    ],
})
export class EssentialsWidgetModule
{
}
