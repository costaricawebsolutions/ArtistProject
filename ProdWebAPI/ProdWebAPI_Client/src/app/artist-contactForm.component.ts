import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details.component';

import { Artist } from './artist';
import { ArtistService } from './app.services';

 
@Component({
  selector: 'artist-contactform',
  templateUrl: 'contactform.html',
  styleUrls: ['app-details.css']

 
})

export class ArtistContactForm implements OnInit, OnDestroy{
   artist: Artist;
   sub: any;
    constructor(private artistService: ArtistService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(){              
        this.sub = this.route.params.subscribe(params => {          
          let id = Number(params['id']);          
          this.artist = this.artistService.get(id);
        });
    }
     ngOnDestroy(){
        this.sub.unsubscribe();
    }

     savePersonDetails(){
        this.artistService.save(this.artist);
        console.log('entro aqui');
    }
   
 }
