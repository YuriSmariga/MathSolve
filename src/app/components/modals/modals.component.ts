import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {CKEditor4} from 'ckeditor4-angular';
import {Task} from '../../interfaces/math/task';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  private editorData: any;
  task: Task;

  constructor(protected dialogRef: NbDialogRef<ModalsComponent>, private taskService: TaskService) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.task.content) {
      this.dialogRef.close(this.task);
    }
  }

  close() {
    this.dialogRef.close();
  }

  ckEditorDataChange($event: CKEditor4.EventInfo) {
    this.task.content = $event.editor.getData();
    this.taskService.updateTask(this.task);

  }
}
