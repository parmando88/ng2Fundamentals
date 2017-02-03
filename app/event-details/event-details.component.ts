import { Component, OnInit } from '@angular/core';
import { EventService } from './../events/shared/event.service';


@Component({
    moduleId: module.id,
    templateUrl: './event-details.component.html',
    styles: [`
    .container { padding-left:20px; padding-left:20px }
    .event-image: { height:100px}
    `]
})
export class EventDetailsComponent implements OnInit {
    event:any;

    constructor(private _eventService:EventService ) {}

    ngOnInit() {
        this.event = this._eventService.getEvent(1);
     }
}