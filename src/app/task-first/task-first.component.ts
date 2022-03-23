import { Component, OnInit } from '@angular/core';
import { UserNamesPipe } from '../shared/pipes/UserNames.pipe';
import { Status, User, UsersService } from '../users.service';

@Component({
  selector: 'app-task-first',
  templateUrl: './task-first.component.html',
  styleUrls: ['./task-first.component.scss'],
  providers: [UsersService],
})
export class TaskFirstComponent implements OnInit {
  users: Array<User> = [];

  loading = false;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {}
  async loadUsers() {
    this.loading = true;
    this.users = await this.usersService.getUsers();
    this.loading = false;
  }
  getClasses(status: string) {
    return {
      'btn-primary': status === Status.Inactive,
      'btn-danger': status === Status.Deleted,
      'btn-success': status === Status.Active,
    };
  }
}
