import {User} from './user';
import {Gender} from '../gender/Gender';

export class Patient extends User {

  constructor(public id?: number,
              public name?: string,
              public surname?: string,
              public fatherName?: string,
              public gender?: Gender,
              public image?: string,
              public username?: string,
              public password?: string,
              public phone?: number,
              public dateOfBirth?: string,
              public authorities?: []) {
    super(id, name, username, password, phone, dateOfBirth, authorities);
  }
}
