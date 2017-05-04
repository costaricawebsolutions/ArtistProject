import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//import { ArtistItemComponent } from './artist-item.component';
import { ArtistDetailsComponent } from './artist-details.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'artist',
    component: AppComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'artist/:id',
    component: ArtistDetailsComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/artist',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
