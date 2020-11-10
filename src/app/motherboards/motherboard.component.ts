import { Component, OnInit } from '@angular/core';
import { Motherboard } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class MotherboardesComponent implements OnInit {

  heroes = HEROES;
  selectedMotherboard: Motherboard;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Motherboard): void {
    this.selectedMotherboard = hero;
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/