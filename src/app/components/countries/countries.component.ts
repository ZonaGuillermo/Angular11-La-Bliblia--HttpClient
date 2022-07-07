import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  arrCountries: any[] = [];

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getAll().subscribe((result) => {
      this.arrCountries = result.map((country) => {
        return {
          capital: country.capital[0],
          flag: country.flags.png,
          name: country.name.official
        }
      })
    })
  }

}
