import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOnElement]',
})
export class ClickOnElementDirective {
  constructor(private elementRef: ElementRef) {}
  @HostListener('click')
  public onClick() {
    this.elementRef.nativeElement.style.background = 'black';
  }
}
