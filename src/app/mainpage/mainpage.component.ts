import { Component, OnInit,HostBinding, Host, ChangeDetectorRef } from '@angular/core';
import { UserService } from './user.service';
import { OverlayContainer} from '@angular/cdk/overlay';
// import { hostname } from 'os';

const dark = 'dark-theme';
const light = 'default-theme';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

    @HostBinding('class.is-open')
    
    // @HostBinding('class') componentCssClass;

    user:string = "";

    data:any = [];

    constructor(private userservice: UserService,private cd: ChangeDetectorRef,public overlayContainer: OverlayContainer) { }

    ngOnInit() {
        // console.log("hello?");
        // this.userservice.change.subscribe(user => {
        //     this.user = user;
        //     console.log(user);
        // });
        // console.log("??????? "+this.userservice.user);
        this.user = this.userservice.user;
       

        // this.userservice.getData().subscribe(data => {

        //     this.data = data;
        //     this.cd.detectChanges();
        //     console.log(data);
        // });

        //2019-07-07T 9:30:00.0

        this.data = [{id:"1",text:"important mission1",list:"a good list",board:"bisli",labels:["general"],date:"2019-09-01T09:30",userid:"2"},
                     {id:"2",text:"important mission2",list:"better list",board:"bisli2",labels:["general","meme"],date:"2019-09-01T15:20",userid:"2"},
                     {id:"3",text:"important mission3",list:"better list",board:"bisli",labels:["bamba"],date:"2019-09-02T15:20",userid:"2"},
                     {id:"5",text:"important mission4",list:"better list",board:"bisli",labels:["meme","test"],date:undefined,userid:"2"},
                     {id:"13",text:"important mission5",list:"better list",board:"bisli",labels:["general"],date:"2019-09-03T14:05",userid:"2"},
                     {id:"139",text:"make pizza",list:"pro",board:"goodboard",labels:["meme"],date:"2019-08-15T13:05",userid:"2"}];

        // this.data = [{text:"important mission4",list:"better list",board:"bisli",labels:["meme","test"],date:"none",userid:"2"},
        //             {text:"important mission4",list:"better list",board:"bisli",labels:["meme","test"],date:"none",userid:"2"}];
        // console.log(this.data);
        console.log(this.data);

    
    }

    refresh()
    {
        console.log("refresh");

        this.data = [];
        this.data = [{id:"1",text:"important mission1",list:"a good list",board:"bisli",labels:["general"],date:"2019-08-13T09:30",userid:"2"},
                     {id:"2",text:"important mission2",list:"better list",board:"bisli2",labels:["general","meme"],date:"2026-08-12T15:20",userid:"2"},
                     {id:"3",text:"important mission3",list:"better list",board:"bisli",labels:["bamba"],date:"none",userid:"2"}];
        this.cd.detectChanges();
        this.cd.markForCheck();
    }

    request()
    {

    }
    // onThemeChange(isdarktheme:boolean)
    // {
    //     if(isdarktheme)
    //     {
    //     this.overlayContainer.getContainerElement().classList.add(dark);
    //     this.overlayContainer.getContainerElement().classList.remove(light);
    //     this.componentCssClass = dark;
    //     localStorage.setItem("theme", dark);
    //     }
    //     else
    //     {
    //     this.overlayContainer.getContainerElement().classList.add(light);
    //     this.overlayContainer.getContainerElement().classList.remove(dark);
    //     this.componentCssClass = light;
    //     localStorage.setItem("theme", light);
    //     }
    // }

}
