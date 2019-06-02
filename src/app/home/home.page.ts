import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigateByUrl('/login');
    console.log("用户登录");
  }

  register(){
    this.router.navigateByUrl('/register');
    console.log("用户注册");

  }

}
