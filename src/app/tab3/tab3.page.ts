import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  logout(){
    this.router.navigateByUrl('/home');
    console.log("注销成功");
  }

  constructor(private router: Router) { }


}

