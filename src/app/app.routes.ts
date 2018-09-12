import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { BodyComponent } from './components/body/body.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PipesComponent } from './components/pipes/pipes.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hello', component: BodyComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes/:id', component: HeroeComponent },
  { path: 'busqueda/:id', component: BusquedaComponent },
  { path: 'pipes', component: PipesComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
