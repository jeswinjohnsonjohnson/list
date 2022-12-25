import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YService {

  serviceURL : string ;

  constructor(private http:HttpClient) { 

    this.serviceURL = "http://localhost:3000/user"
  }

 

  addTask(task : Task) : Observable<Task> {
    return this.http.post<Task>(this.serviceURL,task);
  }


  Viewall():Observable<Task>{
    return this.http.get<Task>(this.serviceURL)
  }




  Deleteit(task:Task):Observable<Task>{
    return this.http.delete<Task>(this.serviceURL+'/'+task.id)

  }
  

  getcurrentdata(id:any){
    return this.http.get(this.serviceURL+'/'+id)
  }



  }
  






