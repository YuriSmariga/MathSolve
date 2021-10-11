import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {
  NbButtonModule,
  NbCalendarModule,
  NbCardModule, NbDialogModule,
  NbInputModule,
  NbLayoutModule, NbMenuModule,
  NbRouteTabsetModule, NbSidebarModule, NbSidebarService,
  NbSpinnerModule,
  NbThemeModule,
  NbTreeGridModule,
  NbUserModule
} from '@nebular/theme';
import {FormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {HttpClientModule} from '@angular/common/http';
import {AngularMyDatePickerModule} from 'angular-mydatepicker';
import { MainComponent } from './components/main/main.component';
import { MathSolutionsComponent } from './components/math-solutions/math-solutions.component';
import { CKEditorModule } from 'ckeditor4-angular';
import {TaskService} from './components/services/task.service';
import { ModalsComponent } from './components/modals/modals.component';
import {UserService} from './components/services/user.service';
import { UserTaskComponent } from './components/user-task/user-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MathSolutionsComponent,
    ModalsComponent,
    UserTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbRouteTabsetModule,
    NbSpinnerModule,
    NbCalendarModule,
    NbInputModule,
    NbButtonModule,
    NbTreeGridModule,
    AngularMyDatePickerModule,
    NbUserModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbSidebarModule,
    NbMenuModule.forRoot(),
    CKEditorModule,
    NbDialogModule.forRoot()
  ],
  providers: [NbSidebarService, TaskService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
