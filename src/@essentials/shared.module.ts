import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { EssentialsDirectivesModule } from '@essentials/directives/directives';
import { EssentialsPipesModule } from '@essentials/pipes/pipes.module';

@NgModule({
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        EssentialsDirectivesModule,
        EssentialsPipesModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        EssentialsDirectivesModule,
        EssentialsPipesModule
    ]
})
export class EssentialsSharedModule
{
}
