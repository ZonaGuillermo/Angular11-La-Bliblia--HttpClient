import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  @Input() characters: any;

  constructor() { }

  ngOnInit(): void {
  }

}
