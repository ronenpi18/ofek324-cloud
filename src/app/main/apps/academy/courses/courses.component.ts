import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { essentialsAnimations } from '@essentials/animations';

import { AcademyCoursesService } from 'app/main/apps/academy/courses.service';
import {HomeService} from "../../../home/home.service";

@Component({
    selector   : 'academy-courses',
    templateUrl: './courses.component.html',
    styleUrls  : ['./courses.component.scss'],
    animations : essentialsAnimations
})
export class AcademyCoursesComponent implements OnInit, OnDestroy
{

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * */
    constructor() {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to categories

    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

}
