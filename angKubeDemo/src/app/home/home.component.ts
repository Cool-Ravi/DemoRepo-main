import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userid: string;

  constructor(private router: Router) { }

  ngOnInit() {
    // get userid from user session variable
    this.userid = sessionStorage.getItem('userid');
  }

  logout() {
    // logout and redirect
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
