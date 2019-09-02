import {Gender} from '../gender/Gender';


export class User {

  constructor(public id?: number,
              public name?: string,
              public username?: string,
              public password?: string,
              public phone?: number,
              public dateOfBirth?: string,
              public authorities?: []) {
  }

}


