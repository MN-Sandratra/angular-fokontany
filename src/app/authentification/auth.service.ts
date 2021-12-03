import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string | null = null;
  loggedUser!: any;
  apiUrl = "http://localhost:3030/api/";

  constructor(private router: Router, private apiUser: UserService) { }
  login(username: string, password: string): void {
    let allUser = [];
    this.apiUser.getAllUser().subscribe(
      data => {
        allUser = data;
        this.loggedUser = allUser.find(
          (x: { username: string; email: string; password: string; }) => ((x.username === username) || (x.email === username)) && (x.password === password)
        );
        if (this.loggedUser !== undefined) this.isLoggedIn = true;
        this.router.navigate(['/fokontany']);
      },
      err => {
        console.log(err)
      }
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loggedUser = {};
    this.router.navigate(['/login']);
  }

}
