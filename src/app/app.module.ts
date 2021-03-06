import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { EssentialsModule } from '@essentials/essentials.module';
import { EssentialsSharedModule } from '@essentials/shared.module';
import { EssentialsProgressBarModule, EssentialsSidebarModule, EssentialsThemeOptionsModule } from '@essentials/components';

import { essentialsConfig } from 'app/essentials-config';

import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/store/store.module';
import { LayoutModule } from 'app/layout/layout.module';
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatRippleModule} from "@angular/material/core";
import {MatPaginatorModule} from "@angular/material/paginator";

const appRoutes: Routes = [
    {
        path        : 'apps',
        loadChildren: './main/apps/apps.module#AppsModule'
    },
    {
        path        : 'pages',
        loadChildren: './main/pages/pages.module#PagesModule'
    },
    {
        path        : 'ui',
        loadChildren: './main/ui/ui.module#UIModule'
    },
    {
        path        : 'home',
        loadChildren: './main/home/home.module#HomeModule'
    },
    {
        path        : 'documentation',
        loadChildren: './main/documentation/documentation.module#DocumentationModule'
    },
    {
        path        : 'angular-material-elements',
        loadChildren: './main/angular-material-elements/angular-material-elements.module#AngularMaterialElementsModule'
    },
    {
        path      : 'project',
        redirectTo: '/apps/dashboards/project'
    },
    {
        path        : '**',
        redirectTo: '/home'
    },
];

@NgModule({
    declarations: [
        AppComponent
        // ServiceRequestsComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // @Essentials modules
        EssentialsModule.forRoot(essentialsConfig),
        EssentialsProgressBarModule,
        EssentialsSharedModule,
        EssentialsSidebarModule,
        EssentialsThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule,
        MatTableModule,
        MatSortModule,
        MatRippleModule,
        MatPaginatorModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
