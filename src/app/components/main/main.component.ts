import { Component, OnInit } from '@angular/core';
import {NbMenuItem, NbSidebarService} from '@nebular/theme';
import { Task } from 'src/app/interfaces/math/task';
import {TaskService} from '../services/task.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  tags: string[] = [
    'алгебра',
    'геметрия',
    'задачи'
  ];
  items: NbMenuItem[] = [
    {
      title: 'Главная',
      link: '/main'
    },
    {
      title: 'Список тем',
      expanded: true,
      children: [
        {
          title: 'Алгебра',
          link: 'algebra'
        },
        {
          title: 'Геометрия',
          link: 'geometry'
        },
        {
          title: 'Мои задачи',
          link: 'userTasks'
        }
      ]
    },


  ];

  tasks: Task[] = [];
  displayTasks: Task[] = [];


  constructor(private sidebarService: NbSidebarService, private tasksService: TaskService) {
    this.tasks = tasksService.getAlgebraTasks();
    this.displayTasks = tasksService.getAlgebraTasks();
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  ngOnInit(): void {
  }

  searchTasks(searchInput: HTMLInputElement) {
    if (searchInput.value) {
      this.displayTasks = this.tasks.filter(value => value.content.includes(searchInput.value));
    } else {
      this.displayTasks = this.tasks;
    }
  }
}
