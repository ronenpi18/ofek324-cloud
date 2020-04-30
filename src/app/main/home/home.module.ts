import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeService} from "./home.service";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {FuseSharedModule} from "@fuse/shared.module";
import {FuseSidebarModule, FuseWidgetModule} from "@fuse/components";
import {MatListModule} from "@angular/material/list";
import {EventsTimelineComponent} from "./events/events.component";
import {AcademyCoursesService} from "../apps/academy/courses.service";
import {AcademyCourseService} from "../apps/academy/course.service";
import {AcademyCoursesComponent} from "../apps/academy/courses/courses.component";
import {ServiceCatalogModule} from "../shared/service-catalog/highlighted-services/service-catalog.module";

const routes: Routes = [
    {
        path     : '**',
        component: HomeComponent,
        resolve  : {
            academy: AcademyCoursesService,
            timeline: HomeService
        }
    },
];


@NgModule({
    declarations: [
        HomeComponent,
        EventsTimelineComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseWidgetModule,

        ServiceCatalogModule,
    ],
    providers:[
        HomeService,
        AcademyCoursesService,
        AcademyCourseService
    ]
})
export class HomeModule { }
