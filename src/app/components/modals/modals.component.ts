import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {CKEditor4} from 'ckeditor4-angular';
import {Task} from '../../interfaces/math/task';
import {TaskService} from '../services/task.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  private editorData: any;
  task: Task;

  constructor(protected dialogRef: NbDialogRef<ModalsComponent>, private taskService: TaskService, private userService: UserService) {
  }

  ngOnInit(): void {
    if (!this.task) {
      this.task = {
        title: '',
        type: '',
        content: '',
        id: this.taskService.getAlgebraTasks().length,
        date: new Date(),
        user: this.userService.getUser(),
        tags: ['']
      }
    }
  }

  submit() {
      this.dialogRef.close(this.task);
  }

  close() {
    this.dialogRef.close();
  }

  ckEditorDataChange($event: CKEditor4.EventInfo) {
    this.task.content = $event.editor.getData();
    this.taskService.updateTask(this.task);
  }

  editTask(value: string, dataType: string) {
    switch (dataType) {
      case 'title':
        this.task.title = value;
        break;
      case 'type':
        this.task.type = value;
        break;
      case 'date':
        this.task.date = new Date();
        break;
    }
  }
}
