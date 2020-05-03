import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[essentialsWidgetToggle]'
})
export class EssentialsWidgetToggleDirective
{
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     */
    constructor(
        public elementRef: ElementRef
    )
    {
    }
}
