import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms'
import {FormControl, Validators} from '@angular/forms';
import { UserService } from '../mainpage/user.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

    @ViewChild('f') form:NgForm;

    username: string;
    // password: string;
    // isvalid:boolean = false;
    // err:string;

    user = new FormControl('', [Validators.required, Validators.email]);

    constructor(private router: Router,private http:HttpClient,private userservice: UserService) { }

    ngOnInit() {
    }

    // getErrorMessage() {
    // return this.user.hasError('required') ? 'You must enter a value' :
    //     this.user.hasError('email') ? 'Not a valid email' :
    //         '';
    // }

    login():void
    {
        this.userservice.set(this.username);
        this.router.navigate(["home"]);
    }
  // login() : void 
  //   {
  //     let it = this;

  //     const req = this.http.post('/api/loginsubmit', {
  //       "user": this.username,
  //       "pass": this.password
  //     })
  //     .subscribe(
  //       function(res:any)
  //       {
  //         console.log(res);
  
  //         if(res.auth)
  //         {
  //           it.router.navigate(["main"]);
  //         }
  //         else
  //         {
  //           it.err = "Invalid credentials";
  //         }
  //       },
  //       err => {
  //         console.log("Error occured+ :: "+err);
  //         it.err = "Error connecting";
  //       }
  //     );
  //   }

  //   inputChanged($event)
  //   {
  //     this.err="";
  //   }

}
