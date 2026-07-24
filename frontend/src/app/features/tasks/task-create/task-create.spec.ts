import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../../services/task'; // or task

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-create.html',
  styleUrl: './task-create.css'
})
export class TaskCreate {


  task = {

    title: '',
    description: '',
    status: 'pending',
    priority: 'medium'

  };


  message = '';



  constructor(
    private taskService: TaskService,
    private router: Router
  ){}




  createTask(){


    this.taskService.createTask(this.task)
    .subscribe({

      next:(response)=>{


        console.log("Task Created:", response);


        this.message = "Task created successfully";


        this.task = {

          title:'',
          description:'',
          status:'pending',
          priority:'medium'

        };


        this.router.navigate([
          '/dashboard'
        ]);


      },


      error:(error)=>{


        console.log(error);


        this.message =
        "Task creation failed";


      }


    });


  }



}