import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AcademyCourseComponent} from "./course.component";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FuseSharedModule} from "@fuse/shared.module";
import {FuseSidebarModule} from "@fuse/components";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {AcademyCourseService} from "../../../apps/academy/course.service";
import {HomeService} from "../../../home/home.service";
import {AcademyCoursesService} from "../../../apps/academy/courses.service";


const routes = [
    {
        path     : 'courses/:courseId/:courseSlug',
        component: AcademyCourseComponent,
        resolve  : {
            academy: AcademyCourseService
        }
    }
];


@NgModule({
  declarations: [
      AcademyCourseComponent
  ],
  imports: [
      RouterModule.forChild(routes),
      CommonModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
      FuseSharedModule,
      FuseSidebarModule,
      MatListModule
  ],
    exports: [
        AcademyCourseComponent
    ],
    providers:[
        HomeService,
        AcademyCoursesService,
        AcademyCourseService
    ]
})
export class StepsCourseModule { }
