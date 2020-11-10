import { Component, OnInit } from '@angular/core';
import { Videocard } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class VideocardesComponent implements OnInit {

  heroes = HEROES;
  selectedVideocard: Videocard;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Videocard): void {
    this.selectedVideocard = hero;
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/