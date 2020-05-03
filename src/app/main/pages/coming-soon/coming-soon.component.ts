import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EssentialsConfigService } from '@essentials/services/config.service';
import { fuseAnimations } from '@essentials/animations';

@Component({
    selector     : 'coming-soon',
    templateUrl  : './coming-soon.component.html',
    styleUrls    : ['./coming-soon.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ComingSoonComponent implements OnInit
{
    comingSoonForm: FormGroup;

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
        this.comingSoonForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }
}
