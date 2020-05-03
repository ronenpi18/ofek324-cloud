import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {GlobalsProvider} from "../shared/globals.provider";

@Injectable()
export class HomeService implements Resolve<any>
{
    projects: any[];
    timeline: any;
    events: any;
    widgets: any[];
    onCategoriesChanged: BehaviorSubject<any>;
    onCoursesChanged: BehaviorSubject<any>;
    timelineOnChanged: BehaviorSubject<any>;
    eventsOnChanged: BehaviorSubject<{}>;
    leastEventsOnChanged: BehaviorSubject<{}>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     * @param globals
     */
    constructor(
        private _httpClient: HttpClient,
        private globals: GlobalsProvider
    )
    {
        this.onCategoriesChanged = new BehaviorSubject({});
        this.onCoursesChanged = new BehaviorSubject({});
        this.timelineOnChanged = new BehaviorSubject({});
        this.leastEventsOnChanged = new BehaviorSubject({});
        this.eventsOnChanged = new BehaviorSubject({});

    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getRecentEvents(),
                this.getTimeline()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }


    getTimeline(): Promise<any[]>
    {
        return new Promise((resolve, reject) => {

            this._httpClient.get('api/profile-timeline')
                .subscribe((timeline: any) => {
                    this.timeline = timeline;
                    this.timelineOnChanged.next(this.timeline);
                    resolve(this.timeline);
                }, reject);
        });
    }
    getRecentEvents(): Promise<any[]>
    {
        return new Promise((resolve, reject) => {

            this._httpClient.get(this.globals.baseAPI + '/events/leastEvents')
                .subscribe((events: any) => {
                    this.events = events;
                    this.leastEventsOnChanged.next(this.events);
                    resolve(this.events);
                }, reject);
        });
    }
}
