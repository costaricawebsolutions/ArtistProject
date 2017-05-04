import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Artist } from './artist';
import { ArtistService } from './app.services';
import { routing } from './app.routes';

@Component({
    selector: 'my-app',
    templateUrl: 'app.html',    
    styleUrls: ['app.css'],
    providers: [ArtistService]

    
})



export class AppComponent implements OnInit, AfterViewInit   {
    artist: Artist[] = [];
    count : number = 0;

    


  constructor(private artistService: ArtistService) { }

    ngOnInit() {
  
        this.artist = this.artistService.getAll();
           
        
        
    }
     
 
    //artists = ARTISTS;
    name = "Today";
    newartists: any;
    currentArtist: Artist;

    showArtist(item:Artist) {
        this.currentArtist = item;        

    }
    onClick(e: string,myElement:any) {
        this.name = e;
        myElement.style.backgroundColor = '#FECE4E';
        

    }
    /*Voy por el tiempo 7:43 de Working with events*/

    artisttemp = ["Barot Bellingham", "Jonathan G. Ferrar II", "Hillary Hewitt Goldwynn-Post", "Hassum Harrod", "Constance Olivia Smith"];
   
    


  
    addArtist(myArtists:string) {      
        
        //this.artists.push(this.newartists);
        this.artisttemp.push(myArtists);
        //console.log(this.artists);
    }

    ngAfterViewInit(){
      var elem = document.getElementsByClassName("artistsearch");
      console.log(elem);
      elem[0].style.display = 'none';
    //  $(".artistsearch")[0].remove();
  }
    

}
