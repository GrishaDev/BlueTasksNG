import { Component, OnInit,Input,Output,EventEmitter,Renderer2,ElementRef } from '@angular/core';
import { UserService } from '../../user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-taskbetter2',
  templateUrl: './taskbetter2.component.html',
  styleUrls: ['./taskbetter2.component.css'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class Taskbetter2Component implements OnInit {

  @Input() item;
  @Input() time;
  @Input() aweek;
  @Output() refresh: EventEmitter<string> =  new EventEmitter();
  isexpand:boolean = false;
  checked:boolean = false;

  height:number = 150;
  expandvalue:string = "expand_more";
  colors:any = [{label:"inprogress",color:"violet"},{label:"general",color:"Turquoise"},{label:"tracking",color:"yellowgreen"},{label:"bug",color:"gold"},
  {label:"help",color:"orange"},{label:"critical",color:"tomato"}];

  currentState = 'initial';

  constructor(private userservice: UserService,private snackBar: MatSnackBar,private renderer: Renderer2,private el: ElementRef) { }


  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  ngOnInit() {
    // console.log("hey");
    // this.renderer.addClass(this.el.nativeElement, 'enter');
    this.changeState();
  }

  ngOnChanges()
  {
    console.log("change");
  }

  ngOnDestroy()
  {
    this.changeState();
    // console.log("lol");
    // this.renderer.addClass(this.el.nativeElement, 'leave');
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
        this.checked = false;
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
