import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  logout(){
    this.router.navigateByUrl('/home');
    console.log("注销成功");
  }

  constructor(private router: Router) { }


}

