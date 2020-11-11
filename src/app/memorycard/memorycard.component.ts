import { Component, OnInit } from '@angular/core';
import { Memorycard } from '../box';
import { boxes } from '../mock-boxes';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})

export class MemorycardesComponent implements OnInit {

  boxes = boxes;
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