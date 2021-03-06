import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { essentialsAnimations } from '@essentials/animations';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {ProfileService} from "../../profile.service";

@Component({
    selector     : 'events-timeline',
    templateUrl  : './timeline.component.html',
    styleUrls    : ['./timeline.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : essentialsAnimations
})
export class ProfileTimelineComponent implements OnInit, OnDestroy
{
    timeline: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ProfileService} _profileService
     */
    constructor(
        private _profileService: ProfileService
    )
    {
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
        this._profileService.timelineOnChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(timeline => {
                this.timeline = timeline;
            });
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
}
