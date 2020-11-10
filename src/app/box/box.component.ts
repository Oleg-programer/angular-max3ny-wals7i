import { Component, OnInit } from '@angular/core';
import { Box } from '../box';
import { boxes } from '../mock-boxes';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})

export class BoxesComponent implements OnInit {

  boxes = boxes;
  selectedHero: Box;

  constructor() { }

  ngOnInit() {
  }

  onSelect(box: Box): void {
    this.selectedHero = box;
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/