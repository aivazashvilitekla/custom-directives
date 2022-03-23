import { Directive, ElementRef, Input } from '@angular/core';
import { Status } from 'src/app/users.service';

@Directive({
  selector: '[appSetBackgroundColorDirective]',
})
export class SetBackgroundColorDirectiveDirective {
  constructor(private elementRef: ElementRef) {
  }
  @Input() set appSetBackgroundColorDirective(value: string) {
    console.log(this.elementRef);
    if (value === Status.Active) {
      console.log(value);
      this.elementRef.nativeElement.style.background = 'green';
    }
    if (value === Status.Deleted) {
      this.elementRef.nativeElement.style.background = 'red';
    }
    if (value === Status.Inactive) {
      this.elementRef.nativeElement.style.background = 'blue';
    }
  }
  
}
