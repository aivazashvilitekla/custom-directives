import { Pipe, PipeTransform } from '@angular/core';
import differenceInCalendarYears from 'date-fns/differenceInYears';

@Pipe({
  name: 'CalculateAge',
})
export class CalculateAgePipe implements PipeTransform {
  transform(value: string): number {
    const now = `${new Date().getFullYear()}, ${new Date().getMonth()}, ${new Date().getDate()}`;
    return differenceInCalendarYears(new Date(now), new Date(value));
  }
}
