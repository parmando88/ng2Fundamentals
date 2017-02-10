import { ISession } from './../shared/index';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent } from '../shared/index'


@Component({
    moduleId: module.id,
    templateUrl: './event-details.component.html',
    styles: [`
    .container { padding-left:20px; padding-left:20px }
    .event-image { height:100px}
    a {cursor:pointer}
    `]
})
export class EventDetailsComponent implements OnInit {
    event:IEvent;
    addMode: boolean
    filterBy: string = 'all'
    sortBy: string = 'votes'

    constructor(private _eventService:EventService, private _route:ActivatedRoute ) {}

    ngOnInit() {
        //this.event = this._eventService.getEvent(+this._route.snapshot.params['id']);
       this._route.params.forEach((params: Params) => {
           this.event = this._eventService.getEvent(+params['id']);
           this.addMode = false;
       })
     }

     addSession(){
        this.addMode = true;
     }

     saveNewSession(session:ISession){
         const nextId = Math.max.apply(null,this.event.sessions.map(s => s.id));
         session.id = nextId + 1
         this.event.sessions.push(session)
         this._eventService.updateEvent(this.event)
         this.addMode = false;
     }

     cancelAddSession(){
         this.addMode = false;
     }
}