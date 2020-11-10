import { Component, OnInit } from '@angular/core';
import { Power } from '../box';
import { boxes } from '../mock-boxes';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})

export class PoweresComponent implements OnInit {

  boxes = boxes;
  selectedPower: Power;

  constructor() { }

  ngOnInit() {
  }

  onSelect(box: Power): void {
    this.selectedPower = box;
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/