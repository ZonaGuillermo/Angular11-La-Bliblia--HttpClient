import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './components/rick-and-morty/characters-list/characters-list.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    component: RickAndMortyComponent,
    children:
      [
        { path: '', component: CharactersListComponent }
      ]
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
