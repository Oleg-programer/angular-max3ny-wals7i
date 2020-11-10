import { Component, OnInit } from '@angular/core';
import { Motherboard } from '../motherboard';
import { MOTHERBOARDS } from '../mock-motherboards';

@Component({
  selector: 'app-motherboards',
  templateUrl: './motherboards.component.html',
  styleUrls: ['./motherboards.component.css']
})

export class MotherboardesComponent implements OnInit {

  motherboards = MOTHERBOARDS;
  selectedMotherboard: Motherboard;

  constructor() { }

  ngOnInit() {
  }

  onSelect(motherboard: Motherboard): void {
    this.selectedMotherboard = motherboard;
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/