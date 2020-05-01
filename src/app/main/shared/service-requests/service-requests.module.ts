import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RequestsService} from "./requests.service";
import {ServiceRequestsComponent} from "./service-requests.component";
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatRippleModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatSortModule} from "@angular/material/sort";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {AgmCoreModule} from "@agm/core";
import {FuseSharedModule} from "../../../../@fuse/shared.module";
import {FuseWidgetModule} from "../../../../@fuse/components";
import {EcommerceProductsComponent} from "../../apps/e-commerce/products/products.component";
import {EcommerceProductsService} from "../../apps/e-commerce/products/products.service";
import {EcommerceProductComponent} from "../../apps/e-commerce/product/product.component";
import {EcommerceProductService} from "../../apps/e-commerce/product/product.service";
import {EcommerceOrdersComponent} from "../../apps/e-commerce/orders/orders.component";
import {EcommerceOrdersService} from "../../apps/e-commerce/orders/orders.service";
import {EcommerceOrderComponent} from "../../apps/e-commerce/order/order.component";
import {EcommerceOrderService} from "../../apps/e-commerce/order/order.service";

const routes: Routes = [
    {
        path     : 'orders',
        component: ServiceRequestsComponent,
        resolve  : {
            data: RequestsService
        }
    },
    {
        path     : 'orders/:id',
        component: EcommerceOrderComponent,
        resolve  : {
            data: EcommerceOrderService
        }
    }
];

@NgModule({
  declarations: [
      ServiceRequestsComponent,
      EcommerceOrdersComponent,EcommerceOrderComponent
  ],
  imports: [
    CommonModule,
      RouterModule.forChild(routes),
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

      FuseSharedModule,
      FuseWidgetModule
  ],
    exports: [
        ServiceRequestsComponent
    ],
    providers:[
        RequestsService,
        EcommerceProductService,
        EcommerceProductsService,
        EcommerceOrderService
    ]
})
export class ServiceRequestsModule { }
