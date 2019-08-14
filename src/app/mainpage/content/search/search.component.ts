import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchValue: EventEmitter<String> =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search(filterValue:string)
  {
    this.searchValue.emit(filterValue);
  }
}
