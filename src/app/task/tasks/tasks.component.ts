import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../task.models';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [CardComponent, DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() task!: Task;
  @Output() taskCompleted = new EventEmitter<string>();
  private tasksService = inject(TasksService)
  onComplete(){
    this.tasksService.removeTask(this.task.id)

  }
}
