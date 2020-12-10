import { Component } from '@angular/core';
// import { Processor } from '../processor'; I import this just to check. Should create general interface aka part/chunk of th
// import { PROCESSORS } from '../mock-processors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Build your PC ';
  confirmedParameter: Processor;

  getParameter(parameter: Processor): void {
    this.selectedProcessor = processor;
    console.log(processor);
  }
}
// onSelect(processor: Processor): void {
//     this.selectedProcessor = processor;
//     console.log(processor);

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/