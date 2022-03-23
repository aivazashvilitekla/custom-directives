// import {default as data} from './data/data.json';

export enum Status {
  Deleted = 'Deleted',
  Inactive = 'Inactive',
  Active = 'Active',
}
export interface User {
  firstName: string;
  lastName: string;
  about: string;
  birthDate: string;
  status: Status;
}

export class UsersService {
  data = [
    {
      firstName: 'tekla1',
      lastName: 'gvari1',
      about: 'tekla1',
      birthDate: '2000,11,25',
      status: Status.Active,
    },
    {
      firstName: 'tekla2',
      lastName: 'gvari2',
      about: 'tekla2',
      birthDate: '2000,11,25',
      status: Status.Deleted,
    },
    {
      firstName: 'tekla3',
      lastName: 'gvari3',
      about: 'tekla3',
      birthDate: '2000,1,11',
      status: Status.Inactive,
    },
  ];
  getUsers(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(this.data);
      }, 2000);
    });
  }
}
