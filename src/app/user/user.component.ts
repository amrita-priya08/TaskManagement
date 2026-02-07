import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { user } from './user.models';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!: user
  @Input({required:true}) selected!: boolean
  @Output() select = new EventEmitter();
  get imagePath(){
    return 'assets/users/'+ this.user.avatar
  }
  onSelectUser(){
    this.select.emit(this.user.id)
  }
}
