import {User} from '../../interfaces/user/user-interfaces';
import {Injectable} from '@angular/core';
import {Task} from 'src/app/interfaces/math/task';

@Injectable()
export class UserService {
  private user: User;


  public updateUser(user: User) {
    this.user = Object.assign(user);
  }

  public getUser(): User {
    return this.user;
  }

  public getUserTasks(): Task[] {
    this.user.tasks = [];
    this.user.tasks.push({
      id: 1,
      title: 'my tittle',
      content: 'my content',
      type: 'geometry',
      date: new Date(),
      user: this.getUser()
    });
    return this.user.tasks;
  }

  public addUserTask(task: Task): void {
    this.user.tasks.push(task);
  }

  public deleteTask(task: Task): void {
    this.user.tasks = this.user.tasks.filter(value => value.id !== task.id);
  }
}
