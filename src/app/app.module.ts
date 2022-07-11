import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CrudComponent } from './components/crud/crud.component';
import { CountriesComponent } from './components/countries/countries.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';
import { CharactersListComponent } from './components/rick-and-morty/characters-list/characters-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    CountriesComponent,
    RickAndMortyComponent,
    CharactersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
