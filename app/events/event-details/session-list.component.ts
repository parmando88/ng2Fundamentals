import { ISession } from './../shared/index';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AuthService } from '../../user/auth.service'
import { VoterService } from './voter.service'

@Component({
    moduleId: module.id,
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnInit, OnChanges {
    @Input() sessions:ISession[];
    @Input() filterBy: string;
    visibleSessions: ISession[] = [];

    @Input() sortBy: string


    constructor(private _authService:AuthService, private _voterService: VoterService) { }

    ngOnInit() { }

    ngOnChanges(){
        if(this.sessions){
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
        }

    }

    toogleVote(session: ISession) {
       if(this.userHasVoted(session)){
           this._voterService.deleteVoter(session, this._authService.currentUser.userName);
       } else {
          this._voterService.addVoter(session, this._authService.currentUser.userName);
       }

       if(this.sortBy === 'votes')
       this.visibleSessions.sort(sortByVotesDesc)
    }

    userHasVoted(session: ISession) {
        return this._voterService.userHasVoted(session, this._authService.currentUser.userName);
    }

    filterSessions(filter){
         if(filter === 'all'){
            this.visibleSessions = this.sessions.slice(0);
         } else{
            this.visibleSessions = this.sessions.filter(session => {return session.level
            .toLocaleLowerCase() === filter;})
         }
    }
}



function sortByNameAsc(s1: ISession, s2: ISession){
    if(s1.name > s2.name) return 1
    else if(s1.name === s2.name) return 0
    else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession){

    return s2.voters.length - s1.voters.length

}