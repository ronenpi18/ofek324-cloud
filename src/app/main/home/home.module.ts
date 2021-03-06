import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeService} from "./home.service";
import {MatIconModule} from "@angular/material/icon";
import {EssentialsSharedModule} from "@essentials/shared.module";
import {EssentialsSidebarModule, EssentialsWidgetModule} from "@essentials/components";
import {EventsTimelineComponent} from "./events/events.component";
import {AcademyCoursesService} from "../apps/academy/courses.service";
import {AcademyCourseService} from "../apps/academy/course.service";
import {ServiceCatalogModule} from "../shared/catalog-handler/highlighted-services/service-catalog.module";
import {ServiceRequestsModule} from "../shared/service-requests/service-requests.module";
import {RequestsService} from "../shared/service-requests/requests.service";
import {EcommerceOrderService} from "../apps/e-commerce/order/order.service";
import {EcommerceProductService} from "../apps/e-commerce/product/product.service";
import {EcommerceProductsService} from "../apps/e-commerce/products/products.service";
import {CatalogService} from "../shared/catalog-handler/highlighted-services/catalog.service";

const routes: Routes = [
    {
        path     : '**',
        component: HomeComponent,
        resolve  : {
            academy: CatalogService,
            timeline: HomeService,
            recent: RequestsService
        }
    },
];


@NgModule({
    declarations: [
        HomeComponent,
        EventsTimelineComponent,

    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        EssentialsSharedModule,
        EssentialsSidebarModule,
        EssentialsWidgetModule,

        ServiceCatalogModule,
        ServiceRequestsModule,
    ],
    providers:[
        HomeService,
        // AcademyCoursesService,
        // AcademyCourseService,
    ]
})
export class HomeModule { }
