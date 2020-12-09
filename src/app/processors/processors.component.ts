import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Processor } from '../processor';
import { PROCESSORS } from '../mock-processors';


@Component({
  selector: 'app-processors',
  templateUrl: './processors.component.html',
  styleUrls: ['./processors.component.css']
})

export class ProcessorsComponent implements OnInit {

  @Output() newparameter = new EventEmitter<string>();
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
  onNext(processor: Processor): void {
    this.confirmedProcessor = processor;
    console.log(this.confirmedProcessor.socket);
  }
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/