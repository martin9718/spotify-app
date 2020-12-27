import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { InitComponent } from './components/shared/init/init.component';


export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'artist/:id', component: ArtistComponent},
    {path: 'init', component: InitComponent},
    {path: '', pathMatch: 'full', redirectTo: 'init'},
    {path: '**', pathMatch:'full', redirectTo:'init'}
];