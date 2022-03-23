import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeOnHover]',
})
export class ChangeOnHoverDirective {
  constructor(private elementRef: ElementRef) {}
  @HostListener('mouseover')
  public onHover() {
    this.elementRef.nativeElement.style.background = 'green';
  }
}
