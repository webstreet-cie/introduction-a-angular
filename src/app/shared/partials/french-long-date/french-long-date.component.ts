import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-french-long-date',
  templateUrl: './french-long-date.component.html',
  styleUrls: ['./french-long-date.component.css']
})
export class FrenchLongDateComponent  {
  @Input() frenchLongDate;
  constructor() { }



}
