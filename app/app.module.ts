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
   SessionListComponent
} from './events/index'

//Components
import { EventsAppComponent }   from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'

//Serivces
import { ToastrService } from './common/toastr.service'
import { AuthService } from './user/auth.service'


//Router
import { appRoutes } from './routes';


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
        SessionListComponent
        ],
    providers: [
                  EventService,
                  ToastrService,
                  EventRouteActivator,
                  EventListResolver,
                  {
                      provide: 'canDeactivateCreateEvent',
                      useValue: checkDirtyState
                  },
                  AuthService
            ],
    bootstrap: [ EventsAppComponent ]
})

export class AppModule { }

function checkDirtyState(component:CreateEventComponent) {
    if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
    return true;
}

