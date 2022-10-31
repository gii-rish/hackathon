import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  userLogin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.username === 'John' && this.password === 'root') {
      this.router.navigate(['/landingPage']);
    }
  }

}
