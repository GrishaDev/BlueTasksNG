import { Component, OnInit, Input } from '@angular/core';
import { LogicService } from './logic.service';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() data;
  filterd_data = [];
  checkboxes = [];
  filterd_data_nodate = [];
  filterd_data_yesdate = [];

  constructor(private logic:LogicService) { }

  ngOnInit() {
    
    console.log("hello do i have data????????????????????????????");
    console.log(this.data);
    // this.checkboxes = this.buildCheckBoxes();
    this.checkboxes = this.logic.buildCheckBoxes(this.data);
    // this.filterd_data = this.logic.makeData(this.data,this.checkboxes);
    this.filterd_data = this.data;
    // this.sortData();
    // this.filterd_data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    this.datasort();

    this.sortDates();
    // this.filterd_data.sort((a, b)=>{ 
        
    //     return +new Date(a.date) - +new Date(b.date); 
    // }); 
    // this.filterd_data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    // this.filterd_data.sort();

  }

  datasort()
  {
    for(let i=0; i<this.filterd_data.length; i++)
    {
      // if(this.filterd_data[i].date)
      let date:Date = new Date(this.filterd_data[i].date);
      if(!isNaN(date.getTime()))
      {
        this.filterd_data[i].date = date.toLocaleString();
      }
      else
        this.filterd_data[i].date="none";
    }
    // this.filterd_data = this.bubbleSort(this.filterd_data);
  }

  sortDates()
  {
    this.filterd_data_nodate = [];
    this.filterd_data_yesdate = [];

    for(let i=0; i<this.filterd_data.length; i++)
    {
      if(this.filterd_data[i].date == "none")
      {
        this.filterd_data_nodate.push(this.filterd_data[i]);
      }
      else
      {
        this.filterd_data_yesdate.push(this.filterd_data[i]);
      }
    }

    this.filterd_data_yesdate.sort((b, a) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    this.filterd_data = this.filterd_data_yesdate.concat(this.filterd_data_nodate);
  }
  // bubbleSort(items) {
  //   var length = items.length;
  //   for (var i = 0; i < length; i++) { //Number of passes
  //     for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
  //       //Compare the adjacent positions
        
  //       if (items[j].date > items[j + 1].date) {
  //         console.log("true");
  //         //Swap the numbers
  //         var tmp = items[j]; //Temporary variable to hold the current number
  //         items[j] = items[j + 1]; //Replace current number with adjacent number
  //         items[j + 1] = tmp; //Replace adjacent number with current number
  //       }
  //     }
  //   }
  //   return items;
  // }

  // sortData() {
  //   return this.filterd_data.sort((a, b) => {
  //     return <any>new Date(b.date) - <any>new Date(a.date);
  //   });
  // }

  dataChanged(data: any)
  {
    console.log("???");
    let isallunchecked:boolean = this.logic.isAllUnchecked(data);

    if(!isallunchecked)
      this.filterd_data = this.logic.makeData(this.data,data);
    else
      this.filterd_data = this.data;

    this.sortDates();
  }
 
}
