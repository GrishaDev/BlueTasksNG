import { Injectable,Output, EventEmitter } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

const host = ''

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:string = "";
  id:string = "";
  constructor(private http:HttpClient){}

  @Output() change: EventEmitter<string> = new EventEmitter();
  @Output() change2: EventEmitter<string> = new EventEmitter();

  getData()
  {
    return this.http.get(host+'/api/data/'+this.id);
  }

  deleteTask(id)
  {
    return this.http.post(host+'/api/deletetask/',{id: id});
  }

  getUser()
  {
    return this.http.get(host+'/api/authdata/');
  }


  set(user,id) {
    this.user = user;
    this.id = id;
    this.change.emit(this.user);
    this.change.emit(this.id);
  }
}
