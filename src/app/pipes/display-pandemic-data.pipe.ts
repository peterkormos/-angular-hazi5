import { Pipe, PipeTransform } from '@angular/core';
import { PandemicData } from '../app.component';

@Pipe({
  name: 'displayPandemicData',
})
export class DisplayPandemicDataPipe implements PipeTransform {
  transform(value: PandemicData, iWantTheTruth?: boolean): string {
    let newTests, inHospital: number;
    let newCases: string;

    if (iWantTheTruth) {
      newTests = value.newTests!;
      newCases = '';
      inHospital = value.inHospital!;
    } else {
      newTests = 2 * value.newTests!;
      newCases = `, újonnan azonosított fertőzöttek száma ${Math.round(
        Math.min(Math.random() * 500, value.newTests! * 0.05)
      )}`;
      inHospital = Math.round(value.inHospital! / 3);
    }

    return `napon a mintavételek száma ${newTests}${newCases};
    aminek következtében ${inHospital}-an vannak kórházban${
      iWantTheTruth ? '.' : ' (mindannyian oltatlan idős krónikus betegek).'
    }`;
  }
}
