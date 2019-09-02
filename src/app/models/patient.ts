import {User} from './user';
import {Gender} from './gender';
import {Role} from './role';

export class Patient extends User {

  constructor(public id?: number,
              public name?: string,
              public surname?: string,
              public fatherName?: string,
              public gender?: Gender,
              public image?: string,
              public username?: string,
              public password?: string,
              public phone?: string,
              public dateOfBirth?: string,
              public role?: Role.ROLE_PATIENT,
              // public authorities?: []
  ) {
    super(id, name, username, password, role, phone, dateOfBirth, /*authorities*/);
  }
}

