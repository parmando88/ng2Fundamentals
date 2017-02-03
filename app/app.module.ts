import { Router } from '@angular/router';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

//Components
import { EventsAppComponent }   from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventDetailsComponent } from './event-details/event-details.component'

//Serivces
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'

//Router
import { appRoutes } from './routes';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent
        ],
    providers: [
                  EventService,
                  ToastrService
            ],
    bootstrap: [ EventsAppComponent ]
})

export class AppModule { }

