import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from './shared/index'

@Component({
    selector: 'event-thumbnail',
    template: `
     <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
         <h2>{{event?.name}}</h2>
         <div>Date: {{event?.date}}</div>
         <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
         </div>
         <div>Price: \${{event?.price}}</div>
         <div  *ngIf="event?.location">
           <span>Location: {{event?.location?.address}}</span>
           <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
          Onnline URL: {{event?.onlineUrl}}
       </div>

     </div>

    `,
    styles: [`
    .green { color: #003300 !important; }
    .bold { font-weight: bold; }
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px;}
    .well div { color: #bbb;}
    `]
})
export class EventThumbnailComponent implements OnInit {
    @Input() event: IEvent;

    constructor() { }

    getStartTimeClass() {
    //Differents was to do it
    //   #1 Returning an Objet
    //   const isEarlyStart = this.event.time === '8:00 am';
    //   return {green: isEarlyStart, bold: isEarlyStart};
    //  #2 Returning an string
    // if(this.event && this.event.time === '8:00 am')
    // return 'green bold';
    // return '';
    //   #2 Returning an array
    if(this.event && this.event.time === '8:00 am')
    return ['green', 'bold'];
    return [];
     }

    //Also I can use [ngStyle]
     getStartTimeStyle(): any{
     if(this.event && this.event.time === '8:00 am')
     return { color: '#003300', 'font-weight': 'bold'}
     return {}
     }

    ngOnInit() { }
}

