import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TaskList } from '../tasks/task-list/task-list';
import { TaskCreate } from '../tasks/task-create/task-create';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TaskList,
    TaskCreate
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements AfterViewInit {


  @ViewChild(TaskList, { static: false })
  taskList!: TaskList;


  ngAfterViewInit(){

  }



  refreshTaskList(){

    console.log("Refreshing task list");


    if(this.taskList){

      this.taskList.loadTasks();

    }

  }



  getPendingTasks(){

    if(!this.taskList || !this.taskList.tasks){

      return 0;

    }


    return this.taskList.tasks.filter(
      task => task.status === 'pending'
    ).length;

  }



  getCompletedTasks(){

    if(!this.taskList || !this.taskList.tasks){

      return 0;

    }


    return this.taskList.tasks.filter(
      task => task.status === 'completed'
    ).length;

  }


}