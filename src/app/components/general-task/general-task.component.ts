import { Component, OnInit } from '@angular/core';
import {Task} from '../../interfaces/math/task';

@Component({
  selector: 'app-general-task',
  templateUrl: './general-task.component.html',
  styleUrls: ['./general-task.component.scss']
})
export class GeneralTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tasks: Task[] = [];
  displayTasks: Task[] = [];

  searchTasks(searchInput: HTMLInputElement) {
    if (searchInput.value) {
      this.displayTasks = this.tasks.filter(value => value.content.includes(searchInput.value));
    } else {
      this.displayTasks = this.tasks;
    }
  }

}
