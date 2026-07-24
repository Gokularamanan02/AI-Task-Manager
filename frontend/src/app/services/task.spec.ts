import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private apiUrl = "http://localhost:3000/api/tasks";


  constructor(
    private http: HttpClient
  ) {}



  private getHeaders(){

    const token = localStorage.getItem("token");


    return {
      headers: new HttpHeaders({

        Authorization: `Bearer ${token}`

      })
    };

  }




  // GET ALL TASKS

  getTasks(): Observable<any>{

    return this.http.get(
      this.apiUrl,
      this.getHeaders()
    );

  }




  // CREATE TASK

  createTask(task:any): Observable<any>{

    return this.http.post(

      this.apiUrl,

      task,

      this.getHeaders()

    );

  }





  // UPDATE TASK

  updateTask(id:string, task:any): Observable<any>{

    return this.http.put(

      `${this.apiUrl}/${id}`,

      task,

      this.getHeaders()

    );

  }





  // DELETE TASK

  deleteTask(id:string): Observable<any>{

    return this.http.delete(

      `${this.apiUrl}/${id}`,

      this.getHeaders()

    );

  }


}