import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';

import { essentialsAnimations } from '@essentials/animations';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {HomeService} from "../home.service";

@Component({
    selector     : 'events-timeline',
    templateUrl  : './events.component.html',
    styleUrls    : ['./events.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : essentialsAnimations
})
export class EventsTimelineComponent implements OnInit, OnDestroy
{
    timeline: any;
    @Input() amountOfItems?: number;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ProfileService} _profileService
     */
    constructor(
        private _profileService: HomeService
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
        if(this.amountOfItems) {
            this._profileService.leastEventsOnChanged
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe(events => {
                    this.timeline = events;
                });
        } else {

            this._profileService.timelineOnChanged
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe(events => {
                    this.timeline = events;
                });
        }
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
