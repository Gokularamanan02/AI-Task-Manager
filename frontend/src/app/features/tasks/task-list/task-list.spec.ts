import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../services/task';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList implements OnInit {


  tasks:any[] = [];

  loading = false;


  constructor(
    private taskService: TaskService
  ){}



  ngOnInit(): void {

    this.loadTasks();

  }



  loadTasks(){

    this.loading = true;


    this.taskService.getTasks()
    .subscribe({

      next:(res)=>{

        this.tasks = res;

        this.loading = false;

      },


      error:(err)=>{

        console.log(err);

        this.loading = false;

      }

    });


  }





  deleteTask(id:string){

    this.taskService.deleteTask(id)
    .subscribe({

      next:()=>{

        this.loadTasks();

      },


      error:(err)=>{

        console.log(err);

      }

    });

  }



}