import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any [] = [];
  loading: Boolean;

  constructor(private router: Router,
              private sporify: SpotifyService) { 
  }

  
  search(term: string){

    if(term){
      
      this.loading = true;
      this.sporify.getArtists(term)
                .subscribe( (data:any) => {
                  this.artists = data;
                  this.loading = false;
                });
 
    }
    
  }

  

}
