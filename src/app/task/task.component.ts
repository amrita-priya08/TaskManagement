import { Component, inject, Input } from '@angular/core';
import { TasksComponent } from "./tasks/tasks.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-task',
  imports: [TasksComponent, AddTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() name?: string
  @Input() userId!: string;
  add!: boolean
  // private tasksService = inject(TasksService)

  constructor(
    private tasksService: TasksService
  ){}
  get selectedUserTask() {
   return this.tasksService.getUserTask(this.userId)
  }
  onTaskComplete(taskId: string){
    this.tasksService.removeTask(taskId)
  }
  addTask(){
    this.add = true
  }
  cancelAddTask(){
    this.add = false
  }

}
