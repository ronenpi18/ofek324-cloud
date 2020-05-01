import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FuseSharedModule } from '@fuse/shared.module';

import { AcademyCoursesComponent } from 'app/main/apps/academy/courses/courses.component';
import { AcademyCourseComponent } from 'app/main/shared/catalog-handler/course/course.component';
import { AcademyCoursesService } from 'app/main/apps/academy/courses.service';
import { AcademyCourseService } from 'app/main/apps/academy/course.service';
import {FuseSidebarModule, FuseWidgetModule} from '@fuse/components';
import {MatListModule} from "@angular/material/list";
import {StepsCourseModule} from "../../shared/catalog-handler/course/steps-course.module";
import {ServiceCatalogModule} from "../../shared/catalog-handler/highlighted-services/service-catalog.module";
import {HomeService} from "../../home/home.service";
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {CommonModule} from "@angular/common";

const routes = [
    {
        path     : 'courses',
        component: AcademyCoursesComponent,
        resolve  : {
            academy: AcademyCoursesService
        }
    },
    {
        path     : 'courses/:courseId/:courseSlug',
        component: AcademyCourseComponent,
        resolve  : {
            academy: AcademyCourseService
        }
    },
    {
        path      : '**',
        redirectTo: 'courses'
    }
];

@NgModule({
    declarations: [
        AcademyCoursesComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseWidgetModule,

        StepsCourseModule,
        ServiceCatalogModule
    ],
    providers:[
        HomeService,
        AcademyCoursesService,
        AcademyCourseService
    ]
})
export class AcademyModule {
}
