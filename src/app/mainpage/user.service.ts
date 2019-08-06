import { Injectable,Output, EventEmitter } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

const host = ''

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:string = "";
  constructor(private http:HttpClient){}

  @Output() change: EventEmitter<string> = new EventEmitter();

  getData()
  {
    return this.http.get(host+'/api/data/'+this.user);
  }

  set(user) {
    this.user = user;
    this.change.emit(this.user);
  }
}
