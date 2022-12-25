import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YService } from '../y.service';
import { Task } from 'src/app/model/task'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  taskObj: Task = new Task();

  id1: string = '';
  name1: string = '';
  email1: string = '';
  status1: string = '';

  constructor(private http: HttpClient, private route: Router, private service: YService) { }

  ngOnInit(): void {
        
    
  }



  add() {

    this.taskObj.id = this.id1
    this.taskObj.name = this.name1
    this.taskObj.email = this.email1
    this.taskObj.status = this.status1
    console.log(this.taskObj);

    this.service.addTask(this.taskObj).subscribe(res => {
      alert('added')
      this.route.navigateByUrl('userlist')
    })

  }


  cancel(){
   
  }


}

