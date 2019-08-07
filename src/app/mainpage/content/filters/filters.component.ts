import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  // checklist = [{value:"waw",isSelected:false},{value:"waw2",isSelected:false},{value:"waw2",isSelected:false}];
  @Input() checklist;
  @Output() newdata: EventEmitter<any> =   new EventEmitter();

  constructor(private logic:LogicService) { }

  ngOnInit() {

  }

  checkBoxClick(filter:string,checked:boolean)
  {
    

    if(checked)
    {
      // this.checkedfilters.push(filter);
      this.checklist = this.logic.tickChecklist(this.checklist,filter,true);
      // console.log(this.checklist);
      // console.log("You checked "+checked+" and here checked filters: "+this.checkedfilters);
      this.newdata.emit(this.checklist);
    }
    else
    {
      this.checklist = this.logic.tickChecklist(this.checklist,filter,false);

      // console.log("You checked "+checked+" and here checked filters: "+this.checkedfilters);
      let checkedfilters = this.logic.getCheckedFilters(this.checklist);
      if(checkedfilters.length == 0)
      {

        this.newdata.emit(this.checklist);
        // console.log("here u should get init data..");
        // this.dataSource = new MatTableDataSource<Server>(SERVER_DATA);
        // setTimeout(() => {this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort;});
      }
      else
      {
        this.newdata.emit(this.checklist);
      }
    }
  }

}
