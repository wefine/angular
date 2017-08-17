import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColorDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseover')
  mouseover() {
    console.log('mouseover')
  }

  @HostListener('click', ['$event'])
  click(event) {
    console.log('clicked ', event)
  }
}
