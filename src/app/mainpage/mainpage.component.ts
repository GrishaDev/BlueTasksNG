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
        console.log(this.user);

        this.userservice.getData().subscribe(data => {
            this.data = data;
            console.log(data);
        });
        // this.data = [{text:"important mission",list:"a good list",board:"bisli",labels:["general"],date:"2019-18-12",userid:"2"},
        //              {text:"hello its very good mission",list:"better list",board:"bisli",labels:["general"],date:"2026-08-12",userid:"2"}];

        console.log(this.data);
    }

}
