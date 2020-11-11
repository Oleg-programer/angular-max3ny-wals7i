import { Component, OnInit } from '@angular/core';
import { Memorycard } from '../box';
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

  onSelect(box: Memorycard): void {
    this.selectedMemorycard = box;
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/