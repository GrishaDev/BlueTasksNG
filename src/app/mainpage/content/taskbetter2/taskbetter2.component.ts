import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { UserService } from '../../user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-taskbetter2',
  templateUrl: './taskbetter2.component.html',
  styleUrls: ['./taskbetter2.component.css']
})
export class Taskbetter2Component implements OnInit {

  @Input() item;
  @Input() time;
  @Input() aweek;
  @Output() refresh: EventEmitter<string> =  new EventEmitter();
  isexpand:boolean = false;
  height:number = 150;
  expandvalue:string = "expand_more";
  colors:any = [{label:"inprogress",color:"violet"},{label:"general",color:"Turquoise"},{label:"tracking",color:"yellowgreen"},{label:"bug",color:"gold"},
  {label:"help",color:"orange"},{label:"critical",color:"tomato"}];

  constructor(private userservice: UserService,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

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
      this.height = 150;
      this.expandvalue = "expand_more";
    }
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

   getColor(label:string)
   {
      for(let i=0; i<this.colors.length; i++)
      {
          if(this.colors[i].label === label)
          {
            return this.colors[i].color;
          }
      }
      return "gray";
   }
   
   openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

}
