import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightedServicesComponent} from "./highlighted-services.component";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {EssentialsSharedModule} from "../../../../../@essentials/shared.module";
import {EssentialsSidebarModule, EssentialsWidgetModule} from "../../../../../@essentials/components";
import {RouterModule, Routes} from "@angular/router";
import {StepsCourseModule} from "../course/steps-course.module";
import {HomeService} from "../../../home/home.service";
import {AcademyCoursesService} from "../../../apps/academy/courses.service";
import {AcademyCourseService} from "../../../apps/academy/course.service";
import {MatInputModule} from "@angular/material/input";
import {CatalogService} from "./catalog.service";


const routes: Routes = [
];


@NgModule({
    declarations: [
        HighlightedServicesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatListModule,
        MatButtonModule,
        MatDividerModule,
        StepsCourseModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,
        NgxChartsModule,
        EssentialsSharedModule,
        EssentialsSidebarModule,
        EssentialsWidgetModule,
        MatInputModule
    ],
    exports: [
        HighlightedServicesComponent
    ],
    providers:[
        HomeService,
        CatalogService,
        AcademyCourseService
    ]
})
export class ServiceCatalogModule {
}