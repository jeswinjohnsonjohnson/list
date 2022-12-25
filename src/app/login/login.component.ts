import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  name:any=''
  password:any=''
  login!: FormGroup

  constructor(private fb: FormBuilder, private http: HttpClient, private route:Router) { }

  ngOnInit(): void {

    this.login = this.fb.group({
      name: [''],
      password: ['']
    })

  }




  LoginTo() {
    this.http.post<any>("http://localhost:3000/login", this.login.value).subscribe(res => {
      alert('user successfull recorded')
      console.log(this.login); 
      this.login.reset()
      this.route.navigateByUrl('home')
    }, err => {
      alert("something went wrong")
    }
    )

  }





}
