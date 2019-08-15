import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() checklist;
  @Input() boardlist;
  @Input() listslist;

  @Output() data_labeled: EventEmitter<any> =  new EventEmitter();
  @Output() data_boarded: EventEmitter<any> =  new EventEmitter();
  @Output() data_listed: EventEmitter<any> =  new EventEmitter();

  @Output() time: EventEmitter<String> =  new EventEmitter();

  type:string = "all";

  constructor(private logic:LogicService) { }

  ngOnInit() {

  }

  filterClick(filter:string,checked:boolean)
  {
    if(checked)
    {
      this.checklist = this.logic.tickChecklist(this.checklist,filter,true);
      this.data_labeled.emit(this.checklist);
    }
    else
    {
      this.checklist = this.logic.tickChecklist(this.checklist,filter,false);
      let checkedfilters = this.logic.getCheckedFilters(this.checklist);
      if(checkedfilters.length == 0)
      {

        this.data_labeled.emit(this.checklist);
      }
      else
      {
        this.data_labeled.emit(this.checklist);
      }
    }
  }

  boardClick(filter:string,checked:boolean)
  {
    if(checked)
    {
      this.boardlist = this.logic.tickChecklist(this.boardlist,filter,true);
      this.data_boarded.emit(this.boardlist);
    }
    else
    {
      this.boardlist = this.logic.tickChecklist(this.boardlist,filter,false);
      let checkedfilters = this.logic.getCheckedFilters(this.boardlist);
      if(checkedfilters.length == 0)
      {

        this.data_boarded.emit(this.boardlist);
      }
      else
      {
        this.data_boarded.emit(this.boardlist);
      }
    }
  }

  ListClick(filter:string,checked:boolean)
  {
    if(checked)
    {
      this.listslist = this.logic.tickChecklist(this.listslist,filter,true);
      this.data_listed.emit(this.listslist);
    }
    else
    {
      this.listslist = this.logic.tickChecklist(this.listslist,filter,false);
      let checkedfilters = this.logic.getCheckedFilters(this.listslist);
      if(checkedfilters.length == 0)
      {

        this.data_listed.emit(this.listslist);
      }
      else
      {
        this.data_listed.emit(this.listslist);
      }
    }
  }

  timeClick(type:string)
  {
    this.type = type;
    this.time.emit(type);
  }

}
