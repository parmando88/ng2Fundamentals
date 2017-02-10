import { ISession } from './../shared/event.model';
import { Injectable } from '@angular/core';

@Injectable()
export class VoterService {

    constructor() { }

    deleteVoter(session: ISession, voterName: string){
      session.voters = session.voters.filter(voter => voter !== voterName);
    }

     addVoter(session: ISession, voterName: string){
       session.voters.push(voterName);
    }

    userHasVoted(session: ISession, voterName: string){
        return session.voters.findIndex(v => v === voterName) > -1
       // return session.voters.some(voter => voter === voterName)
    }
}