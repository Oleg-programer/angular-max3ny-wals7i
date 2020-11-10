import { Component, OnInit } from '@angular/core';
import { Power } from '../power';
import { powers } from '../mock-powers';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css']
})

export class PoweresComponent implements OnInit {

  powers = powers;
  selectedPower: Power;

  constructor() { }

  ngOnInit() {
  }

  onSelect(power: Power): void {
    this.selectedPower = power;
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/