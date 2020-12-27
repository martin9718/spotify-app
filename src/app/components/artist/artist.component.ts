import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any [] = [];
  loading: boolean;

  constructor(private  activateRouter: ActivatedRoute,
              private  router:         Router,
              private sporify: SpotifyService) {

      this.loading = true;
                
      this.activateRouter.params.subscribe( params => {
        this.getArtist( params['id']);
        this.getTopTracks( params['id']);
      });
   }

  getArtist( id: string){

    this.sporify.getArtist(id)
        .subscribe( artist => {
          console.log(artist);
          this.artist = artist;
          this.loading = false;
        });
  }

  getTopTracks( id: string ){
    this.sporify.getTopTracks(id)
        .subscribe( topTracks => {
          console.log(topTracks)
          this.topTracks = topTracks;
        });
  }

}
