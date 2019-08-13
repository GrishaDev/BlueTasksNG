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
  boardlist = [];
  filterd_data_nodate = [];
  filterd_data_yesdate = [];
  time:string = "all";

  constructor(private logic:LogicService) { }

  ngOnInit() {
    

    this.checkboxes = this.logic.buildCheckBoxes(this.data);
    this.boardlist = this.logic.buildBoardList(this.data);
    this.filterd_data = this.data;

    this.datasort();

    this.sortDates();

    // console.log("kjsadjasd "+this.logic.isNext7days(new Date("2019-08-20T09:30")));

  }

  datasort()
  {
    for(let i=0; i<this.filterd_data.length; i++)
    {

      let date:Date = new Date(this.filterd_data[i].date);
      if(!isNaN(date.getTime()))
      {
        this.filterd_data[i].date = date.toLocaleString();
      }
      else
        this.filterd_data[i].date="none";
    }
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


  LabelsChanged(data: any)
  {
    // let isallunchecked:boolean = this.logic.isAllUnchecked(data);

    // if(!isallunchecked)
    //   this.filterd_data = this.logic.makeData(this.data,data);
    // else
    //   this.filterd_data = this.data;

    // this.sortDates();
    this.checkboxes = data;
    this.updateData();
  }

  BoardsChanged(data: any)
  {
    // let isallunchecked:boolean = this.logic.isAllUnchecked(data);

    // if(!isallunchecked)
    //   this.filterd_data = this.logic.makeData(this.data,data);
    // else
    //   this.filterd_data = this.data;

    // this.sortDates();
    this.boardlist = data;
    this.updateData();
  }

  updateData()
  {
    let isalluncheckedFilters:boolean = this.logic.isAllUnchecked(this.checkboxes);
    // let isalluncheckedBoards:boolean = this.logic.isAllUnchecked(this.boardlist);

    if(!isalluncheckedFilters)
      this.filterd_data = this.logic.makeData(this.data,this.checkboxes);
    else
      this.filterd_data = this.data;

    let isalluncheckedBoards:boolean = this.logic.isAllUnchecked(this.boardlist);

    if(!isalluncheckedBoards)
      this.filterd_data = this.logic.filterBoards(this.filterd_data,this.boardlist);

    this.filterd_data = this.logic.timeFilter(this.filterd_data,this.time);
    this.sortDates();
  }

  timeChange(time:string)
  {
    this.time=time;
    this.updateData();
  }
 
}
