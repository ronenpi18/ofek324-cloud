import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { EssentialsSharedModule } from '@essentials/shared.module';

import {AddServicesComponent} from './add-services.component';
import {AddServicesService} from './add-services.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

const routes = [
    {
        path     : 'add-services',
        component: AddServicesComponent,
        resolve  : {
            add: AddServicesService
        }
    }
];

@NgModule({
    declarations: [
        AddServicesComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        EssentialsSharedModule,
        MatStepperModule,
        MatFormFieldModule,
        MatSelectModule
    ],
    providers   : [
        AddServicesService
    ]
})
export class AddServicesModule
{
}
