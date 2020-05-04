import { Component, ViewEncapsulation } from '@angular/core';

import { essentialsAnimations } from '@essentials/animations';

@Component({
    selector     : 'chat-start',
    templateUrl  : './chat-start.component.html',
    styleUrls    : ['./chat-start.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : essentialsAnimations
})
export class ChatStartComponent
{
    constructor()
    {
    }
}
