import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, filter, take, takeUntil } from 'rxjs/operators';

import { EssentialsConfigService } from '@essentials/services/config.service';
import { EssentialsNavigationService } from '@essentials/components/navigation/navigation.service';
import { EssentialsPerfectScrollbarDirective } from '@essentials/directives/essentials-perfect-scrollbar/essentials-perfect-scrollbar.directive';
import { EssentialsSidebarService } from '@essentials/components/sidebar/sidebar.service';

@Component({
    selector     : 'navbar-vertical-style-2',
    templateUrl  : './style-2.component.html',
    styleUrls    : ['./style-2.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalStyle2Component implements OnInit, OnDestroy
{
    fuseConfig: any;
    navigation: any;

    // Private
    private _essentialsPerfectScrollbar: EssentialsPerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {EssentialsConfigService} _essentialsConfigService
     * @param {EssentialsNavigationService} _essentialsNavigationService
     * @param {EssentialsSidebarService} _essentialsSidebarService
     * @param {Router} _router
     */
    constructor(
        private _essentialsConfigService: EssentialsConfigService,
        private _essentialsNavigationService: EssentialsNavigationService,
        private _essentialsSidebarService: EssentialsSidebarService,
        private _router: Router
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Directive
    @ViewChild(EssentialsPerfectScrollbarDirective, {static: true})
    set directive(theDirective: EssentialsPerfectScrollbarDirective)
    {
        if ( !theDirective )
        {
            return;
        }

        this._essentialsPerfectScrollbar = theDirective;

        // Update the scrollbar on collapsable item toggle
        this._essentialsNavigationService.onItemCollapseToggled
            .pipe(
                delay(500),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this._essentialsPerfectScrollbar.update();
            });

        // Scroll to the active item position
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                    setTimeout(() => {
                        this._essentialsPerfectScrollbar.scrollToElement('navbar .nav-link.active', -120);
                    });
                }
            );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                    if ( this._essentialsSidebarService.getSidebar('navbar') )
                    {
                        this._essentialsSidebarService.getSidebar('navbar').close();
                    }
                }
            );

        // Get current navigation
        this._essentialsNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._essentialsNavigationService.getCurrentNavigation();
            });

        // Subscribe to the config changes
        this._essentialsConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.fuseConfig = config;
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar opened status
     */
    toggleSidebarOpened(): void
    {
        this._essentialsSidebarService.getSidebar('navbar').toggleOpen();
    }

    /**
     * Toggle sidebar folded status
     */
    toggleSidebarFolded(): void
    {
        this._essentialsSidebarService.getSidebar('navbar').toggleFold();
    }
}
