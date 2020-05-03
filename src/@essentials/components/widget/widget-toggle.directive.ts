import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[fuseWidgetToggle]'
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
