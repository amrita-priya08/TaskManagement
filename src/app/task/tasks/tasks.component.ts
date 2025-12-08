import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.models';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() task!: Task;
  @Output() taskCompleted = new EventEmitter<string>();

  onComplete(){
    this.taskCompleted.emit(this.task.id)
  }
}
