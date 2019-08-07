import { Component, OnInit,HostBinding, Host } from '@angular/core';
import { UserService } from './user.service';
// import { hostname } from 'os';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

    @HostBinding('class.is-open')
    user:string = "";

    data:any = [];
    constructor(private userservice: UserService) { }

    ngOnInit() {
        // console.log("hello?");
        // this.userservice.change.subscribe(user => {
        //     this.user = user;
        //     console.log(user);
        // });
        // console.log("??????? "+this.userservice.user);
        this.user = this.userservice.user;
       

        this.userservice.getData().subscribe(data => {
            this.data = data;
            console.log(data);
        });
        //2019-07-07T 9:30:00.0
        // this.data = [{text:"important mission1",list:"a good list",board:"bisli",labels:["general"],date:"2019-07-07T09:30",userid:"2"},
        //              {text:"important mission2",list:"better list",board:"bisli",labels:["general","meme"],date:"2026-08-12T15:20",userid:"2"},
        //              {text:"important mission3",list:"better list",board:"bisli",labels:["bamba"],date:undefined,userid:"2"},
        //              {text:"important mission4",list:"better list",board:"bisli",labels:["meme","test"],date:undefined,userid:"2"},
        //              {text:"important mission5",list:"better list",board:"bisli",labels:["general"],date:"2019-08-08T13:05",userid:"2"}];

    
    }

}
