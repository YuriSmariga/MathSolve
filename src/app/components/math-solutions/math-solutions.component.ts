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
  constructor(public tskService: TaskService, private dialogService: NbDialogService, public readonly userService: UserService) { }


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
    this.tskService.deleteTask(task);
  }

  addTask() {
    this.tskService.addTask({
      content: 'content',
      id: 55,
      title: 'New Task',
      user: {
        role: 'admin',
        id: 13,
        password: 'password',
        name: 'name',
        tasks: []
      },
      date: new Date(),
      tags: [],
      type: 'geometry'
    })
  }
}
