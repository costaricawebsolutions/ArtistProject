import { Component } from '@angular/core';
import { ArtistService } from './app.services';

@Component({
    selector: 'my-app',
     template: `
        <h1> {{title}} </h1>
        <initial>
        
  `,    
    providers: [ArtistService]

    
})

export class AppMain {
  title:string = 'Star Wars Peoplez!';
}
