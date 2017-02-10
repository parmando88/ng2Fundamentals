import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'upvote',
    template:`
       <div class="votingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
          <div class="votingButton">
            <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
          </div>
          <div class="badge badge-inverse votingCount">
            <div>{{count}}</div>
          </div>
        </div>
       </div>
    `,
    styleUrls:['./upvote.component.css']
})
export class UpVoteComponent implements OnInit {
    @Input() count: number
    @Input() set voted(val){
        this.iconColor = val ? 'red' : 'white';
    }
    iconColor: string
    @Output() vote = new EventEmitter()

    constructor() { }

    ngOnInit() { }

    onClick() {
       this.vote.emit({});
    }
}