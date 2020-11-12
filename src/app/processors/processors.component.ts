import { Component, OnInit } from '@angular/core';
import { Processor } from '../processor';
import { PROCESSORS } from '../mock-processors';
import { Motherboard } from '../motherboard';
import { MOTHERBOARD } from '../mock-motherb';

@Component({
  selector: 'app-processors',
  templateUrl: './processors.component.html',
  styleUrls: ['./processors.component.css']
})

export class ProcessorsComponent implements OnInit {

  processors = PROCESSORS;
  selectedProcessor: Processor;
  confirmedProcessor: Processor;

  constructor() { }

  ngOnInit() {
  }

  onSelect(processor: Processor): void {
    this.selectedProcessor = processor;
    console.log(processor);
  }
  onNext()

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/