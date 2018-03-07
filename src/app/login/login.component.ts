import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Login} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Login = new Login('', '');

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  submitForm() {
    this.router.navigate(['/home']);
  }

}
