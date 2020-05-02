import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {GlobalsProvider} from "../../shared/globals.provider";

@Injectable()
export class FaqService implements Resolve<any>
{
    faqs: any;
    onFaqsChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param globals
     * @param {HttpClient} _httpClient
     */
    constructor(
        private globals: GlobalsProvider,
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onFaqsChanged = new BehaviorSubject({});
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
                this.getFaqs()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get faqs
     */
    getFaqs(): Promise<any>
    {
        // return this._httpClient.get<[]>("http://localhost:8082/staticData/faq")
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.globals.baseAPI + '/staticData/faq')
                .subscribe((response: any) => {
                    this.faqs = response;
                    this.onFaqsChanged.next(this.faqs);
                    resolve(this.faqs);
                }, reject);
        });
    }
}
