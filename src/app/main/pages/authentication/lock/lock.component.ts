import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EssentialsConfigService } from '@essentials/services/config.service';
import { essentialsAnimations } from '@essentials/animations';

@Component({
    selector     : 'lock',
    templateUrl  : './lock.component.html',
    styleUrls    : ['./lock.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : essentialsAnimations
})
export class LockComponent implements OnInit
{
    lockForm: FormGroup;

    /**
     * Constructor
     *
     * @param {EssentialsConfigService} _essentialsConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _essentialsConfigService: EssentialsConfigService,
        private _formBuilder: FormBuilder
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

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.lockForm = this._formBuilder.group({
            username: [
                {
                    value   : 'Katherine',
                    disabled: true
                }, Validators.required
            ],
            password: ['', Validators.required]
        });
    }
}
