import { Component, OnInit } from '@angular/core';
import { Motherboard } from '../hero';
import { HEROES } from '../mock-motherboards';

@Component({
  selector: 'app-motherboards',
  templateUrl: './motherboards.component.html',
  styleUrls: ['./motherboards.component.css']
})

export class MotherboardesComponent implements OnInit {

  motherboards = HEROES;
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