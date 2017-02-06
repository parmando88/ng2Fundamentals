import { EventService } from './../shared/event.service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router'

@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private _eventService:EventService, private _router:Router) { }

    canActivate(_route:ActivatedRouteSnapshot) {
       const eventExists = !!this._eventService.getEvent(+_route.params['id'])

       if(!eventExists)
       this._router.navigate(['/404'])

       return eventExists;
    }
}