import {Task} from '../../interfaces/math/task';
import {Injectable} from '@angular/core';
@Injectable()
export class TaskService {
  tasks: Task[] = [{
    id: 1,
    content: 'Ab aut deserunt dignissimos distinctio ducimus error explicabo facilis' +
      ' hic, magni molestiae .',
    date: new Date(),
    title: 'задача 1',
    user: {
      name: '',
      password: '',
      role: '',
      tasks: []
    }
  },
    {
      id: 2,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut deserunt dignissimos distinctio ducimus error explicabo' +
        ' facilis hic, magni molestiae nam nesciunt perferendis reiciendis repellendus saepe sapiente soluta veritatis vero.',
      date: new Date(),
      title: 'задача 2',
      user: {
        name: '',
        password: '',
        role: '',
        tasks: []
      }
    },
    {
      id: 3,
      content: 'Lorem ipsum dolor sit',
      date: new Date(),
      title: 'задача 3',
      user: {
        name: '',
        password: '',
        role: '',
        tasks: []
      }
    }];

  getAlgebraTasks(): Task[] {
    return this.tasks;
  }

  updateTask(task: Task): void {
    let updatingTask = this.tasks.find(value => {
      return value.id === task.id;
    });
    if (updatingTask) {
      updatingTask.content = task.content;
    }
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(value => value.id !== task.id);
  }
}
