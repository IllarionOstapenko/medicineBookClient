import {Role} from './role';
import {User} from './user';

export class Laboratory  extends  User {

  constructor(public id?: number,
              public name?: string,
              public region?: string,
              public district?: string,
              public city?: string,
              public street?: string,
              public username?: string,
              public password?: string,
              public phone?: string,
              public dateOfBirth?: string,
              public role?: Role,
  ) {
    super(id, name, username, password, role, phone, dateOfBirth, /*authorities*/);
  }
}
              // public authorities?: []
