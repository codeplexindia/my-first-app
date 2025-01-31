import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   selectedUser = DUMMY_USERS[randomIndex]; //using zone.js

   selectedUserSignal = signal(DUMMY_USERS[randomIndex]); // using signal

   imagePathSignal = computed(()=> 'assets/users/' + this.selectedUserSignal().avatar);

   get imagePath() {
     return 'assets/users/' + this.selectedUser.avatar;
   } // using zone.js

   onSelectedUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
     this.selectedUser = DUMMY_USERS[randomIndex]; // using zone.js
     this.selectedUserSignal.set(DUMMY_USERS[randomIndex]);
   }
}
