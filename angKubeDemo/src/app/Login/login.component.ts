import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid: string;
  password: string;
  validationerror: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // login form submit action
  submit() {
    // mandatory field check
    if((!this.userid || this.userid.length === 0) && (!this.password || this.password.length === 0)) {
      this.validationerror = 'Please provide all mandatory fields.'
    }

    if(this.userid === 'admin' && this.password === '123') {
      // if success redirect to home url
      sessionStorage.setItem('userid', 'Admin');
      this.router.navigate(['/home']);
    } else {
      // if fail display error message
      this.validationerror = 'Invalid credential.'
    }
  }
}
