import { Component, OnInit } from '@angular/core';
import {CKEditor4} from 'ckeditor4-angular';
import {TaskService} from '../services/task.service';
import {NbDialogService} from '@nebular/theme';
import {ModalsComponent} from '../modals/modals.component';
import {UserService} from '../services/user.service';
import {Task} from '../../interfaces/math/task';

@Component({
  selector: 'app-math-solutions',
  templateUrl: './math-solutions.component.html',
  styleUrls: ['./math-solutions.component.scss']
})
export class MathSolutionsComponent implements OnInit {
  taskData: any = '';
  tasks: Task[] = [];
  displayTasks: Task[] = [];


  constructor(public taskService: TaskService, private dialogService: NbDialogService, public readonly userService: UserService) {
    this.tasks = taskService.getAlgebraTasks();
    this.displayTasks = this.tasks;
  }

  ngOnInit(): void {
  }

  public ckEditorDataChange( event: CKEditor4.EventInfo ) {
    console.log( event.editor.getData() );
  }

  editTask(task: Task) {
    this.dialogService.open(ModalsComponent, {
      context: {
        task: task
      }
    }).onClose.subscribe(value => {
      if (value){
        this.taskData = value
      }
    })
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
  }

  addTask() {
    this.dialogService.open(ModalsComponent).onClose.subscribe(value => {
      if (value){
        this.taskService.addTask(value as Task)
      }
    })
  }

  searchTasks(searchInput: HTMLInputElement) {
    if (searchInput.value) {
      this.displayTasks = this.tasks.filter(value => value.content.includes(searchInput.value));
    } else {
      this.displayTasks = this.tasks;
    }
  }

}
