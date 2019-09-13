import { Component, OnInit,HostBinding, Host, ChangeDetectorRef , AfterViewInit,ElementRef} from '@angular/core';
import { UserService } from './user.service';
import { OverlayContainer} from '@angular/cdk/overlay';
import { ThemesService } from '../themes.service';
// import { hostname } from 'os';

const dark = 'dark-theme';
const light = 'default-theme';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit,AfterViewInit{

    @HostBinding('class.is-open')
    @HostBinding('class') componentCssClass;
    // @HostBinding('class') componentCssClass;

    user:string = "";

    data:any = [];

    constructor(private userservice: UserService,private cd: ChangeDetectorRef,public overlayContainer: OverlayContainer, private themeservice: ThemesService
    ,private elementRef: ElementRef) { }

    ngOnInit() {
        // console.log("hello?");
        // this.userservice.change.subscribe(user => {
        //     this.user = user;
        //     console.log(user);
        // });
        // console.log("??????? "+this.userservice.user);
        
        
        // this.overlayContainer.getContainerElement().classList.add(dark);
        // this.overlayContainer.getContainerElement().classList.remove(light);
        // this.componentCssClass = dark;

        
        // this.GetAuth();

        // this.userservice.set("HAHA",3);
        // this.user = this.userservice.user;



        // Uncomment this for prod:

        // this.userservice.getData().subscribe(data => {

        //     this.data = data;
        //     this.cd.detectChanges();
        //     console.log(data);
        // });

        // this.GetAuth();
        
        // ==============================
        


        // Uncomment this for dev:

        this.data = [{id:"1",text:"important mission1",list:"a good list",board:"bisli",labels:["general"],date:"2019-09-13T09:30",userid:"2"},
                     {id:"2",text:"important mission2",list:"better list",board:"bisli2",labels:["general","meme"],date:"2019-09-13T15:20",userid:"2"},
                     {id:"3",text:"important mission3",list:"better list",board:"bisli",labels:["bamba"],date:"2019-09-16T15:20",userid:"2"},
                     {id:"5",text:"important mission4",list:"better list",board:"bisli",labels:["meme","test"],date:undefined,userid:"2"},
                     {id:"13",text:"important mission5",list:"better list",board:"bisli",labels:["general"],date:"2019-09-16T14:05",userid:"2"},
                     {id:"139",text:"make pizza",list:"pro",board:"goodboard",labels:["meme"],date:"2019-09-18T13:05",userid:"2"}];

        // ==============================



        // this.data = [{text:"important mission4",list:"better list",board:"bisli",labels:["meme","test"],date:"none",userid:"2"},
        //             {text:"important mission4",list:"better list",board:"bisli",labels:["meme","test"],date:"none",userid:"2"}];
        // console.log(this.data);
        console.log(this.data);

        this.checkForDarkTheme();
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

    GetAuth()
    {
        let it = this;

        this.userservice.getUser().subscribe(function(user: any) {

            it.userservice.set(user.user,user.id);
            it.user = it.userservice.user;

            it.userservice.getData().subscribe(data => {

                it.data = data;
                it.cd.detectChanges();
                console.log(data);
            });
        });
    }

    onThemeChange(isdarktheme:boolean)
    {
        // if(isdarktheme)
        // {
        // this.overlayContainer.getContainerElement().classList.add(dark);
        // this.overlayContainer.getContainerElement().classList.remove(light);
        // this.componentCssClass = dark;
        // localStorage.setItem("theme", dark);
        // }
        // else
        // {
        // this.overlayContainer.getContainerElement().classList.add(light);
        // this.overlayContainer.getContainerElement().classList.remove(dark);
        // this.componentCssClass = light;
        // localStorage.setItem("theme", light);
        // }
        let isdark = this.themeservice.toggleTheme();
        if(isdark)
        {
            this.overlayContainer.getContainerElement().classList.add(dark);
            this.overlayContainer.getContainerElement().classList.remove(light);
            this.componentCssClass = dark;
            localStorage.setItem("theme", dark);
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#3d3d3d';
        }
         else
        {
            this.overlayContainer.getContainerElement().classList.add(light);
            this.overlayContainer.getContainerElement().classList.remove(dark);
            this.componentCssClass = light;
            localStorage.setItem("theme", light);
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
        }
    }

    checkForDarkTheme()
    {
        let isdark = localStorage.getItem("theme");
        if(isdark == dark)
        {
            let useless = this.themeservice.toggleTheme();
            this.overlayContainer.getContainerElement().classList.add(dark);
            this.overlayContainer.getContainerElement().classList.remove(light);
            this.componentCssClass = dark;
        }
    }

    ngAfterViewInit(){
         
        let isdark = localStorage.getItem("theme");
        if(isdark == dark)
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#3d3d3d';
        else
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
     }

}
