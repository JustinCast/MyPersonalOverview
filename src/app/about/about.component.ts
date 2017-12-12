import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  email: string;
  password: string;
  state: boolean = false
  
  constructor(public authService: AuthService) {}
  
  ngOnInit(): void {

  }

  signup() {
    this.authService.signup(this.email, this.password);
    //this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    //this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }
  toggle(){
    this.state = !this.state  
  }

}
