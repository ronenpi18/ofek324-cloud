import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EssentialsPipesModule } from '@essentials/pipes/pipes.module';

import { EssentialsMaterialColorPickerComponent } from '@essentials/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        EssentialsMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        EssentialsPipesModule
    ],
    exports: [
        EssentialsMaterialColorPickerComponent
    ],
})
export class EssentialsMaterialColorPickerModule
{
}
