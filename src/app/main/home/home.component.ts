import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private _unsubscribeAll: Subject<any>;

    constructor(
    ) {

        // Set the defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit() {

    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


}
