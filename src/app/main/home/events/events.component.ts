import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';

import { fuseAnimations } from '@fuse/animations';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {HomeService} from "../home.service";

@Component({
    selector     : 'events-timeline',
    templateUrl  : './events.component.html',
    styleUrls    : ['./events.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
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
        this._profileService.timelineOnChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(timeline => {
                if(this.amountOfItems) {
                    let activitiesArr = timeline.activities.slice(0,this.amountOfItems)
                    timeline.activities = activitiesArr
                    this.timeline = timeline
                }
                else {
                    this.timeline = timeline;
                }
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
