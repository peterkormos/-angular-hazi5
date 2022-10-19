import { Directive, ElementRef, Input } from '@angular/core';
import { PandemicData } from '../app.component';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') set pandemicData(pandemicData: PandemicData) {
    if (pandemicData.newPositiveTestsPercent > 2.5) {
      this.element.nativeElement.style.color = 'red';
    }
    else {
      this.element.nativeElement.style.color = 'green';
    }

    this.element.nativeElement.style.padding='5px 5px';
    this.element.nativeElement.style.margin='5px 5px';
    this.element.nativeElement.style.borderRadius='5px';
    this.element.nativeElement.style.border='1px solid black';
};

  @Input() set iWantTheTruth(iWantTheTruth: boolean) {
    iWantTheTruth ?
      this.element.nativeElement.style.backgroundColor = 'lightblue' :
      this.element.nativeElement.style.backgroundColor = 'white';
  }
  constructor(private element: ElementRef<HTMLElement>) { 
  }

}
