import { Observable } from 'rxjs/Rx';
import { ISession } from './../shared/event.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class VoterService {

    constructor(private _http: Http) { }

    deleteVoter(eventId: number, session: ISession, voterName: string){
      session.voters = session.voters.filter(voter => voter !== voterName);
      
      this._http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`)
                .catch(this.handleError).subscribe();
    }

     addVoter(eventId: number, session: ISession, voterName: string){
       session.voters.push(voterName);

       let headers = new Headers({'Content-Type': 'application/json'});
       let options = new RequestOptions({headers: headers})
       let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`

       this._http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe();
    }

    userHasVoted(session: ISession, voterName: string){
        return session.voters.findIndex(v => v === voterName) > -1
       // return session.voters.some(voter => voter === voterName)
    }

    private handleError(error: Response) {
      return Observable.throw(error.statusText);
    }
}