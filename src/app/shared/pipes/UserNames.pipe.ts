import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/users.service';

@Pipe({
  name: 'UserNames',
})
export class UserNamesPipe implements PipeTransform {
  transform(value: any[]): string {
    return value.reduce((acc, cur) => {
      return (acc += 'users: ' + cur.firstName + ', ');
    }, '');
  }
}
