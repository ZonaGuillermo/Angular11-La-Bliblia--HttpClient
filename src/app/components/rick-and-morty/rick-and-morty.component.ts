import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css']
})
export class RickAndMortyComponent implements OnInit {

  info: any = {}
  currentPage: number = 1;
  characters: any[] = []

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(page: number = 1): void {
    this.currentPage = page;
    this.rickAndMortyService.getAll(page).subscribe((data) => {
      this.info = data.info
      this.characters = data.results
    })
  }

}
