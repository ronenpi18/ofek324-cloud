import { NgModule } from '@angular/core';

import { EssentialsCountdownComponent } from '@essentials/components/countdown/countdown.component';

@NgModule({
    declarations: [
        EssentialsCountdownComponent
    ],
    exports: [
        EssentialsCountdownComponent
    ],
})
export class EssentialsCountdownModule
{
}
