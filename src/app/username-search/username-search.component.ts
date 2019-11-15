import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-username-search',
  templateUrl: './username-search.component.html',
  styleUrls: ['./username-search.component.css']
})
export class UsernameSearchComponent implements OnInit {
  myform: FormGroup;
  data;
  local;
  showSpinner: boolean;
  constructor(private http: HttpClient,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.myform = new FormGroup({
      username: new FormControl('')
    });
  }
  onSubmit() {

    this.showSpinner = true;
    this.data = false;
    this.local = localStorage.getItem(this.myform.value.username);
    if (this.local) {
      this.data = JSON.parse(this.local);
      this.showSpinner = false;
    } else {
      // tslint:disable-next-line: max-line-length
      this.http.get('https://api.github.com/users/' + this.myform.value.username + '?access_token=beba3c150021bfb49769385927dfa59fac2cdf04').subscribe(Response => {
        this.data = Response;
        this.showSpinner = false;
        localStorage.setItem(this.myform.value.username, JSON.stringify(Response));
      }, err => {
        this.data = false;
        this.showSpinner = false;
        this.snackbar.open('not found', 'oops', { duration : 2000 , verticalPosition : 'top', horizontalPosition : 'right'});
      });
    }
  }
}
