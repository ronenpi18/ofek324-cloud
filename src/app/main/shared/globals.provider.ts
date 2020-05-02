import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalsProvider {
    baseAPI = "http://localhost:8082"
}