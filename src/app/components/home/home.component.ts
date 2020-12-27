import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean;

  error: boolean;
  errorMessage: string;

  constructor(private spotify: SpotifyService,
              private router: Router) {
    
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
                .subscribe( (data:any) => {
                  this.newSongs = data;
                  this.loading = false;
                }, (err) => {
                  this.loading = false;
                  this.error = err;
                  this.errorMessage = err.error.error.message;
                  this.router.navigate(['/init']);
                });
   
   }

  
 
  ngOnInit(): void {
  }

}
