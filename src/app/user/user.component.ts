import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user: User | undefined;
  @Input({ required: true }) selected!: boolean;
  @Output() selectedUser = new EventEmitter<string>();

  //selectedUser = output<string>(); //signal - automatically create event emmitter
  //avatar = input.required<string>();
  //name = input.required<string>();
  //imagepath = computed(() => '/assets/users/' + this.avatar()); // using signal

  get imagePath() {
    return '/assets/users/' + this.user?.avatar;
  }

  onSelectedUser() {
    this.selectedUser.emit(this.user?.id);
    //this.selectedUser.emit(this.userId);
  }
}
