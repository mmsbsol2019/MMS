import { Component, OnInit } from '@angular/core';
export interface DefCat {
  value: string;
  viewValue: string;
}
export interface Status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-deficiency-search',
  templateUrl: './deficiency-search.component.html',
  styleUrls: ['./deficiency-search.component.scss']
})
export class DeficiencySearchComponent implements OnInit {

  defCategory: DefCat[] = [
    {value: 'MNC', viewValue: 'MNC'},
    {value: 'NC', viewValue: 'NC'},
    {value: 'OBS', viewValue: 'OBS'}
  ];
  status: Status[] = [
    {value: 'OPEN', viewValue: 'OPEN'},
    {value: 'CLOSE', viewValue: 'CLOSE'} 
  ];
  constructor() { }

  ngOnInit() {
  }

}
