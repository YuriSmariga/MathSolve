import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/math/task';
import {UserService} from '../services/user.service';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.scss']
})
export class UserTaskComponent implements OnInit {
  taskId = 2;
  userTasks: Task[];

  constructor(private userService: UserService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.userTasks = this.userService.getUserTasks()
  }

  addTask() {
    this.taskId++;
    this.userService.addUserTask({
      user: this.userService.getUser(),
      date: new Date(),
      content: ' new content',
      title: 'title',
      id: this.taskId
    });
  }

  deleteTasks(task: Task) {
    this.userService.deleteTask(task)
  }
}
