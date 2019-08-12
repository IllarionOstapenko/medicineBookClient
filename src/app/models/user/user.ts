import {Gender} from '../gender/Gender';


export class User {

  constructor(public id?: number,
              public name?: string,
              public surname?: string,
              public email?: string,
              public phone?: number,
              public date?: string,
              public gender?: Gender) {
  }


}
