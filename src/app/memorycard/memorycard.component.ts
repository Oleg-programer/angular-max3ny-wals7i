import { Component, OnInit } from '@angular/core';
import { Memorycard } from '../memorycard';
import { memorycards } from '../mock-memorycards';

@Component({
  selector: 'app-memorycards',
  templateUrl: './memorycards.component.html',
  styleUrls: ['./memorycards.component.css']
})

export class MemorycardesComponent implements OnInit {

  memorycards = memorycards;
  selectedMemorycard: Memorycard;

  constructor() { }

  ngOnInit() {
  }

  onSelect(memorycard: Memorycard): void {
    this.selectedMemorycard = memorycard;
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/