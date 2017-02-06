import { ISession } from './../shared/index';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnInit {
    @Input() sessions:ISession[]


    constructor() { }

    ngOnInit() { }
}