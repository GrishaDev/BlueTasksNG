import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { UserService } from '../../user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-taskbetter',
  templateUrl: './taskbetter.component.html',
  styleUrls: ['./taskbetter.component.css']
})
export class TaskbetterComponent implements OnInit {

  @Input() item;
  @Input() time;
  @Input() aweek;
  @Output() refresh: EventEmitter<string> =  new EventEmitter();
  // @Output() onhoveroutput: EventEmitter<any> =  new EventEmitter();
  isexpand:boolean = false;
  height:number = 100;
  expandvalue:string = "expand_more";

  constructor(private userservice: UserService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    // console.log(this.item);
  }

  deleteTask(id)
  {
    // this.openSnackBar("Hey","ok");

    console.log("deleting item "+id);

    this.userservice.deleteTask(id).subscribe(
      (res:any)=>
      {
        console.log(res);

        if(res.status)
        {
          console.log("succesful delete");
          this.refresh.emit(id);
          this.openSnackBar("Completed!","ok");
        }
        else
        {
          console.log("error");
          this.openSnackBar("Error completing. Try again soon","Ouch");
        }
      },
      err => {
        console.log("Error occured+ :: "+err);
        this.openSnackBar("Error contacting API. Try again soon","Ouch");
      }
    );
   }
   
  //  hover(type)
  //  {
  //   let item = {item: this.item, hover: type};
  //   this.onhoveroutput.emit(item);
  //  }

  expand()
  {
    this.isexpand = !this.isexpand;

    if(this.isexpand)
    {
      this.height = 200;
      this.expandvalue = "expand_less";
    }
    else
    {
      this.height = 100;
      this.expandvalue = "expand_more";
    }
  }
   openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

}
