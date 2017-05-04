import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Artist } from './artist';
import { ArtistService } from './app.services';

 
@Component({
  selector: 'artist-details',
  templateUrl: 'artistdetails.html',
  inputs: ['artist'],
  styleUrls: ['app-details.css']
})

export class ArtistDetailsComponent implements OnInit, OnDestroy{

    artist: Artist;
    sub: any;

   professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];


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
    gotoArtistList(){
        let link = ['/artist'];        
        this.router.navigate(link);
    }
    savePersonDetails(){
        this.artistService.save(this.artist);
      
    }

 
 }
