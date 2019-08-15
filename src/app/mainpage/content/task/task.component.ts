import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { UserService } from '../../user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() item;
  @Output() refresh: EventEmitter<string> =  new EventEmitter();

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
  
   openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

}


