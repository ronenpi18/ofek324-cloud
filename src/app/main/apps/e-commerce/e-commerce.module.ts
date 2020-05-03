import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';

import { EssentialsSharedModule } from '@essentials/shared.module';
import { EssentialsWidgetModule } from '@essentials/components/widget/widget.module';

import { EcommerceProductsComponent } from 'app/main/apps/e-commerce/products/products.component';
import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { EcommerceProductComponent } from 'app/main/apps/e-commerce/product/product.component';
import { EcommerceProductService } from 'app/main/apps/e-commerce/product/product.service';
import { EcommerceOrdersService } from 'app/main/apps/e-commerce/orders/orders.service';
import { EcommerceOrderComponent } from 'app/main/apps/e-commerce/order/order.component';
import { EcommerceOrderService } from 'app/main/apps/e-commerce/order/order.service';
import {ServiceRequestsModule} from "../../shared/service-requests/service-requests.module";
import {ServiceRequestsComponent} from "../../shared/service-requests/service-requests.component";
import {RequestsService} from "../../shared/service-requests/requests.service";

const routes: Routes = [
    {
        path     : 'products',
        component: EcommerceProductsComponent,
        resolve  : {
            data: EcommerceProductsService
        }
    },
    {
        path     : 'products/:id',
        component: EcommerceProductComponent,
        resolve  : {
            data: EcommerceProductService
        }
    },
    {
        path     : 'products/:id/:handle',
        component: EcommerceProductComponent,
        resolve  : {
            data: EcommerceProductService
        }
    },
    // {
    //     path     : 'orders',
    //     component: EcommerceOrdersComponent,
    //     resolve  : {
    //         data: EcommerceOrdersService
    //     }
    // },
    // {
    //     path     : 'orders/:id',
    //     component: EcommerceOrderComponent,
    //     resolve  : {
    //         data: EcommerceOrderService
    //     }
    // }
];

@NgModule({
    declarations: [
        EcommerceProductsComponent,
        EcommerceProductComponent,
        // EcommerceOrdersComponent,
        // EcommerceOrderComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        ServiceRequestsModule,

        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,

        NgxChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),

        EssentialsSharedModule,
        EssentialsWidgetModule
    ],
    providers   : [
        EcommerceProductsService,
        EcommerceProductService,
        // EcommerceOrdersService,
        EcommerceOrderService,
        RequestsService
    ]
})
export class EcommerceModule
{
}
