import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../services/task';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList implements OnInit {


  tasks: any[] = [];

  loading = false;


  editingTask: any = null;


  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef
  ) {}



  ngOnInit(): void {

    this.loadTasks();

  }



  loadTasks(){


    this.loading = true;


    this.taskService.getTasks()
    .subscribe({

      next:(response:any)=>{


        console.log("Tasks:", response);


        this.tasks = [...response];


        this.loading = false;


        this.cdr.detectChanges();


      },


      error:(error)=>{


        console.log("Task Error:", error);


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


      error:(error)=>{


        console.log(error);


      }

    });


  }




  editTask(task:any){

    this.editingTask = {
      ...task
    };


    console.log("Editing:", this.editingTask);

  }




  updateTask(){


    this.taskService.updateTask(
      this.editingTask._id,
      this.editingTask
    )
    .subscribe({

      next:(response:any)=>{


        console.log("Updated:", response);


        this.editingTask = null;


        this.loadTasks();


      },


      error:(error)=>{


        console.log("Update Error:", error);


      }

    });


  }




  cancelEdit(){


    this.editingTask = null;


  }
toggleStatus(task:any){


  const updatedTask = {

    ...task,

    status: task.status === 'pending'
    ? 'completed'
    : 'pending'

  };



  this.taskService.updateTask(
    task._id,
    updatedTask
  )
  .subscribe({

    next:(response:any)=>{


      console.log("Status Updated:", response);


      this.loadTasks();


    },


    error:(error)=>{


      console.log("Status Update Error:", error);


    }


  });


}

}