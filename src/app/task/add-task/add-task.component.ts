import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task.models';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() cancelTask = new EventEmitter()
  @Output() addNewTask =  new EventEmitter <NewTaskData>()
  enteredTitle = ''
  enteredSummary = ''
  enteredDate = ''
  onCancelTask(){
    this.cancelTask.emit()
  }
  onTaskSubmit(){
    this.addNewTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }
}
