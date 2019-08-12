import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  constructor() { }

  buildCheckBoxes(data)
  {
    let once=true;
    let label:string;
    // let deadline:string;
    let checklist = [];

    for(let i=0; i<data.length; i++)
    {
      // deadline = this.data[i].date;
      for(let j=0; j<data[i].labels.length; j++)
      {
        label = data[i].labels[j];
        if(!this.filterExists(checklist,label))
        {
          checklist.push({value:label,isSelected:false});
        }
      }
      if(data[i].date != "none" && once)
      {
        once=false;
        checklist.push({value:"deadline",isSelected:false});
      }
    }
    return checklist;
  }

  filterExists(checklist,filter:string)
  {
    for(let i=0; i<checklist.length;i++)
    {
      if(checklist[i].value == filter)
      {
        return true
      }
    }
    return false;
  }

  makeData(data,checkedfilters)
  {
    let currentdata = data;
    let newdata = [];
    let once = true;
    let used_data = [];

    let checked = this.getCheckedFilters(checkedfilters);

    for(let i=0; i<currentdata.length; i++)
    {
      for(let k=0; k<currentdata[i].labels.length; k++)
      {
        for(let j=0; j<checked.length; j++)
        {
          if(currentdata[i].labels[k] == checked[j])
          {
            if(!this.sameObjectAlreadyThere(newdata,currentdata[i]))
            {
              newdata.push(currentdata[i]);
              used_data.push(true);
            }
            
          }
          
        }
      }
      console.log(newdata);
      
      for(let j=0; j<checked.length; j++)
      {
        if(currentdata[i].date != "none" && checked[j]=="deadline" && !used_data[i])
        {
          if(!this.sameObjectAlreadyThere(newdata,currentdata[i]))
            newdata.push(currentdata[i]);
        }
      }
    }
    return newdata;
  }

  filterBoards(data,checkedfilters)
  {
    let currentdata = data;
    let newdata = [];
    let once = true;
    let used_data = [];

    let checked = this.getCheckedFilters(checkedfilters);

    for(let i=0; i<currentdata.length; i++)
    {
        for(let j=0; j<checked.length; j++)
        {
          if(currentdata[i].board == checked[j])
          {
            if(!this.sameObjectAlreadyThere(newdata,currentdata[i]))
            {
              newdata.push(currentdata[i]);
              used_data.push(true);
            }
          }
        }
      
      // for(let j=0; j<checked.length; j++)
      // {
      //   if(currentdata[i].date != "none" && checked[j]=="deadline" && !used_data[i])
      //   {
      //     if(!this.sameObjectAlreadyThere(newdata,currentdata[i]))
      //       newdata.push(currentdata[i]);
      //   }
      // }
    }
    return newdata;
  }

  sameObjectAlreadyThere(newdata,currentdata)
  {
    for(let i=0; i<newdata.length; i++)
    {
      if(currentdata == newdata[i])
      {
        return true;
      }
    }
    return false;
  }

  getCheckedFilters(checklist)
  {
    let checkedfilters = [];

    for(let i=0; i<checklist.length;i++)
    {
      if(checklist[i].isSelected)
      {
        checkedfilters.push(checklist[i].value);
      }
    }
    return checkedfilters;
  }

  tickChecklist(checklist,filter:string,value:boolean)
  {
    for(let i =0; i<checklist.length; i++)
    {
      if(checklist[i].value == filter)
      {
        checklist[i].isSelected = value;
      }
    }
    return checklist;
  }

  isAllUnchecked(checklist)
  {
    for(let i=0; i<checklist.length;i++)
    {
      if(checklist[i].isSelected)
      {
        return false;
      }
    }
    return true;
  }

  buildBoardList(data)
  {
    let board:string;
    let checklist = [];

    for(let i=0; i<data.length; i++)
    {
      board = data[i].board;
      if(!this.filterExists(checklist,board))
      {
        checklist.push({value:board,isSelected:false})
      }
    }
    return checklist;
  }
}
