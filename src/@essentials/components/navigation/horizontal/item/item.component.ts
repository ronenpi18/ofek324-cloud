import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector   : 'essentials-nav-horizontal-item',
    templateUrl: './item.component.html',
    styleUrls  : ['./item.component.scss']
})
export class EssentialsNavHorizontalItemComponent
{
    @HostBinding('class')
    classes = 'nav-item';

    @Input()
    item: any;

    /**
     * Constructor
     */
    constructor()
    {

    }
}
