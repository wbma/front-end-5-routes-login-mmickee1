import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';
import {Http} from '@angular/http';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public mediaService: MediaService, private router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.mediaService.getUserData().subscribe(response => {
        // console.log('Welcome ' + response['full_name']);
        console.log('Welcome ' + response['username']);
        this.router.navigate(['front']);
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
    }
  }
}
