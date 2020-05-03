import { Component, ViewEncapsulation } from '@angular/core';

import { EssentialsConfigService } from '@essentials/services/config.service';
import { fuseAnimations } from '@essentials/animations';

@Component({
    selector     : 'maintenance',
    templateUrl  : './maintenance.component.html',
    styleUrls    : ['./maintenance.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class MaintenanceComponent
{
    /**
     * Constructor
     *
     * @param {EssentialsConfigService} _essentialsConfigService
     */
    constructor(
        private _essentialsConfigService: EssentialsConfigService
    )
    {
        // Configure the layout
        this._essentialsConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
}
