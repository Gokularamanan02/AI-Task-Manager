import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../services/task';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-create.html',
  styleUrl: './task-create.css'
})
export class TaskCreate {


  @Output() taskCreated = new EventEmitter<void>();


  task = {
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium'
  };


  message = '';


  constructor(
    private taskService: TaskService
  ) {}



  createTask(){


    if(!this.task.title.trim()){

      this.message = "Task title is required";

      return;

    }


    this.taskService.createTask(this.task)
    .subscribe({

      next:(response:any)=>{


        console.log("Task Created:", response);


        this.message = "Task created successfully";


        this.taskCreated.emit();


        this.task = {
          title:'',
          description:'',
          status:'pending',
          priority:'medium'
        };


      },


      error:(error:any)=>{


        console.log(error);


        this.message="Task creation failed";


      }


    });


  }


}