import { Component } from '@angular/core';

import { EssentialsSidebarService } from '@essentials/components/sidebar/sidebar.service';

@Component({
    selector   : 'simple-left-sidebar-1',
    templateUrl: './left-sidebar-1.component.html',
    styleUrls  : ['./left-sidebar-1.component.scss']
})
export class SimpleLeftSidebar1Component
{
    /**
     * Constructor
     *
     * @param {EssentialsSidebarService} _essentialsSidebarService
     */
    constructor(
        private _essentialsSidebarService: EssentialsSidebarService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar
     *
     * @param name
     */
    toggleSidebar(name): void
    {
        this._essentialsSidebarService.getSidebar(name).toggleOpen();
    }
}
