import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html'
})
export class InitComponent {

  constructor(private router : Router,
              private spotify: SpotifyService) {

    spotify.getToken().subscribe(data => {
      localStorage.setItem('token', `${data['access_token']}`)
      this.router.navigate(['/home']);
    });

   }
}
