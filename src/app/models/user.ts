import {Gender} from './gender';
import {Role} from './role';


export class User {

  constructor(public id?: number,
              public name?: string,
              public username?: string,
              public password?: string,
              public role?: Role,
              public phone?: string,
              public dateOfBirth?: string,
              // public authorities?: []
  ) {
  }

}


