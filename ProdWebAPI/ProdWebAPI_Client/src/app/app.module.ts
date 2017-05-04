import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { ArtistItemComponent } from './artist-item.component';
import { ArtistDetailsComponent } from './artist-details.component';
import { ArtistContactForm } from './artist-contactForm.component';

import { SearchPipe } from './search-pipe';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, ArtistItemComponent, ArtistDetailsComponent, SearchPipe,ArtistContactForm ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  
}
