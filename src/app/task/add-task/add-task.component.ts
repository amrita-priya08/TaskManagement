import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input() userId!: string;
  @Output() cancelTask = new EventEmitter()
  enteredTitle = ''
  enteredSummary = ''
  enteredDate = ''
  constructor(
    private taskService : TasksService
  ){}
  onCancelTask(){
    this.cancelTask.emit()
  }
  onTaskSubmit(){
    this.taskService.addNewTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      }, this.userId
    )
    this.cancelTask.emit()

  }
}
