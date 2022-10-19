import { Component, HostListener } from '@angular/core';

export interface PandemicData {
  date: Date;
  newTests: number;
  newPositiveTestsPercent: number;
  inHospital: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pandemicHistory: PandemicData[];
  _iWantTheTruth: boolean = false;

  constructor() {
    const historyLength: number = 10;
    this.pandemicHistory = new Array(historyLength);

    const maxTestNo = 10000, maxInHospital = 1000;
    for (let index = 0; index < this.pandemicHistory.length; index++) {
      const date = new Date();
      date.setDate(date.getDate() - index);
      this.pandemicHistory[index] = {
        date: date,
        newTests: Math.round(Math.random() * maxTestNo),
        newPositiveTestsPercent: Math.round(Math.random() * 10),
        inHospital: Math.round(Math.random() * maxInHospital),
      }
    }
  }

  get iWantTheTruth() {
    return this._iWantTheTruth;
  }

  set iWantTheTruth(iWantTheTruth: boolean) {
    this._iWantTheTruth = iWantTheTruth;
  }

  @HostListener('window:keydown.Alt.i', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    this._iWantTheTruth = true;
  }
  @HostListener('window:keyup.Alt.i', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    this._iWantTheTruth = false;
  }

}
