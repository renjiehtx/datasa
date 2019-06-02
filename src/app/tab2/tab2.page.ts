import { Component } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  single: any[];
  multi: any[];

  view: any[] = [350, 280];

  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  showLegend = true;
  legendTitle = '比例';
  legendPosition = 'bottom';


  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
  }
}
