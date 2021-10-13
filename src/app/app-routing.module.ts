import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MainComponent} from './components/main/main.component';
import {MathSolutionsComponent} from './components/math-solutions/math-solutions.component';
import {UserTaskComponent} from './components/user-task/user-task.component';
import {GeneralTaskComponent} from './components/general-task/general-task.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent, children: [
      {path: 'algebra', component: MathSolutionsComponent},
      {path: 'geometry', component: MathSolutionsComponent},
      {path: 'userTasks', component: UserTaskComponent},
      {path: 'general', component: GeneralTaskComponent}
    ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
