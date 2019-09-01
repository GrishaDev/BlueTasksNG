import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { LogicService } from './logic.service';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
import {MatDialog,MAT_DIALOG_DATA,MatDialogRef,MatPaginator,MatTableDataSource,MatSort} from '@angular/material';

export interface Data {
  text: string,
  list: string,
  board: string,
  labels: Array<String>,
  date: String
}


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() data;
  @Output() refreshRoot: EventEmitter<any> =  new EventEmitter(); 

  filterd_data = [];
  filterd_data_backup = [];
  week_filterd_data = [];
  checkboxes = [];
  boardlist = [];
  listslist = [];
  filterd_data_nodate = [];
  filterd_data_yesdate = [];
  time:string = "all";
  searchValue:string = "";
  datasource;
  aweek = []
  weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  // taskhover:boolean = false;
  // item:any = [];

  constructor(private logic:LogicService) { }

  ngOnInit() {
    this.init()
  }

  init()
  {
    this.checkboxes = this.logic.buildCheckBoxes(this.data);
    this.boardlist = this.logic.buildBoardList(this.data);
    this.listslist = this.logic.buildLists(this.data);

    this.filterd_data = this.data;

    this.datasort();

    this.sortDates();
    this.datasource = new MatTableDataSource<Data>(this.filterd_data);

    this.buildaweek();
  }

  buildaweek()
  {
    let today = new Date();
    // const inweek = new Date();
    // inweek.setDate(today.getDate() + 7);
    for(let i=0; i<7; i++)
    {
      this.aweek.push(new Date(today));
      today.setDate(today.getDate() + 1);
    }
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
    this.checkboxes = data;
    this.updateData();
  }

  BoardsChanged(data: any)
  {
    this.boardlist = data;
    this.updateData();
  }

  ListsChanged(data:any)
  {
    this.listslist = data;
    this.updateData();
  }

  updateData()
  {
    let isalluncheckedFilters:boolean = this.logic.isAllUnchecked(this.checkboxes);

    if(!isalluncheckedFilters)
      this.filterd_data = this.logic.makeData(this.data,this.checkboxes);
    else
      this.filterd_data = this.data;

    let isalluncheckedBoards:boolean = this.logic.isAllUnchecked(this.boardlist);

    if(!isalluncheckedBoards)
      this.filterd_data = this.logic.filterBoards(this.filterd_data,this.boardlist);

    let isalluncheckedLists:boolean = this.logic.isAllUnchecked(this.listslist);

    if(!isalluncheckedLists)
      this.filterd_data = this.logic.filterByLists(this.filterd_data,this.listslist);

    this.filterd_data = this.logic.timeFilter(this.filterd_data,this.time);
    this.sortDates();

    this.datasource = new MatTableDataSource<Data>(this.filterd_data);

  }

  timeChange(time:string)
  {
    this.time=time;
    this.updateData();
    console.log(this.filterd_data);
  }
  
  searched(value:string)
  {
    this.datasource.filter = value.trim().toLowerCase();
    this.filterd_data = this.datasource.filteredData;
  }

  refresh(id)
  {
    console.log("refresh");
    // this.refreshRoot.emit();

    console.log(id);
    const index = this.data.findIndex(item => item.id == id);
    this.data.splice(index,1);

    this.init();

  }

  // hoveroutput(item)
  // {
  //   if(item.hover)
  //   {
  //     console.log("hello this is shit");
  //     this.taskhover=true;
  //     this.item = item.item;
  //     console.log(this.item);
  //   }
  //   else
  //   {
  //     this.taskhover= false;
  //   }

  // }

  todayCheck(item,date)
  {
    let itemdate = new Date(item.date);
    return (itemdate.getDay() == date.getDay());
  }

}
