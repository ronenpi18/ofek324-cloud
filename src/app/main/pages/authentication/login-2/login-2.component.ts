import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EssentialsConfigService } from '@essentials/services/config.service';
import { essentialsAnimations } from '@essentials/animations';

@Component({
    selector     : 'login-2',
    templateUrl  : './login-2.component.html',
    styleUrls    : ['./login-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : essentialsAnimations
})
export class Login2Component implements OnInit
{
    loginForm: FormGroup;

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
        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
}
