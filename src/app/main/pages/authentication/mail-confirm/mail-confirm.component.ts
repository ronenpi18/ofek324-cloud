import { Component, ViewEncapsulation } from '@angular/core';

import { EssentialsConfigService } from '@essentials/services/config.service';
import { essentialsAnimations } from '@essentials/animations';

@Component({
    selector     : 'mail-confirm',
    templateUrl  : './mail-confirm.component.html',
    styleUrls    : ['./mail-confirm.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : essentialsAnimations
})
export class MailConfirmComponent
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
