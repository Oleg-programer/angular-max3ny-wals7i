import { Component, OnInit } from '@angular/core';
import { Processor } from '../harddrive';
import { PROCESSORS } from '../mock-harddrives';

@Component({
  selector: 'app-harddrives',
  templateUrl: './harddrives.component.html',
  styleUrls: ['./harddrives.component.css']
})

export class ProcessorsComponent implements OnInit {

  harddrives = PROCESSORS;
  selectedProcessor: Processor;

  constructor() { }

  ngOnInit() {
  }

  onSelect(harddrive: Processor): void {
    this.selectedProcessor = harddrive;
    console.log(harddrive);
  }
  

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/