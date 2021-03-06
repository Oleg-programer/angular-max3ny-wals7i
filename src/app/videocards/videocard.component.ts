import { Component, OnInit } from '@angular/core';
import { Videocard } from '../videocard';
import { VIDEOCARDS } from '../mock-videocards';

@Component({
  selector: 'app-videocards',
  templateUrl: './videocards.component.html',
  styleUrls: ['./videocards.component.css']
})

export class VideocardesComponent implements OnInit {

  videocards = VIDEOCARDS;
  selectedVideocard: Videocard;

  constructor() { }

  ngOnInit() {
  }

  onSelect(videocard: Videocard): void {
    this.selectedVideocard = videocard;
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/