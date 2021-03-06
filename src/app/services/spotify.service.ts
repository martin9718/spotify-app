import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor(  private http:HttpClient) {
    console.log('SpotifyService ready');
  }

  getToken(){    
    return this.http.get('https://get-spotify-token.herokuapp.com/spotify/token');
  }


   getQuery( query: string){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
       'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get(url, {headers});

   }


   getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( data => data['albums'].items ) );
    
   }

   getArtists( term: string ){
    
    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items ) );      

   }

   getArtist( id: string ){
    
    return this.getQuery(`artists/${ id }`);
                //.pipe( map( data => data['artists'].items ) );      

   }

   getTopTracks( id: string ){
    
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( data => data['tracks'] ) );      

   }
}

