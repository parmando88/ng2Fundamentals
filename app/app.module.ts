import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
   EventsListComponent,
   EventThumbnailComponent,
   EventService,
   EventDetailsComponent,
   CreateEventComponent,
   EventRouteActivator,
   EventListResolver,
   CreateSessionComponent,
   SessionListComponent,
   DurationPipe,
   UpVoteComponent,
   VoterService,
   LocationValidator
} from './events/index'

//Components
import { EventsAppComponent }   from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'


//Serivces
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from './common/index'
import { AuthService } from './user/auth.service'


//Router
import { appRoutes } from './routes';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpVoteComponent,
        LocationValidator
        ],
    providers: [
                  EventService,
                  {
                      provide: TOASTR_TOKEN,
                      useValue: toastr
                  },
                  {provide: JQ_TOKEN, useValue: jQuery},
                //   EventRouteActivator,
                // It is the same..
                {
                   provide:  EventRouteActivator,
                   useClass:  EventRouteActivator
                },
                //Also you can get an instance of a different sevice like this
                //{provide: Logger, useClass: FileLogger}
                  EventListResolver,
                  {
                      provide: 'canDeactivateCreateEvent',
                      useValue: checkDirtyState
                  },
                  AuthService,
                  VoterService
            ],
    bootstrap: [ EventsAppComponent ]
})

export class AppModule { }

function checkDirtyState(component:CreateEventComponent) {
    if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
    return true;
}

