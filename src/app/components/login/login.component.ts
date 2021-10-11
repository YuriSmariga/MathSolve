import { Component, OnInit } from '@angular/core';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {User} from '../../interfaces/user/user-interfaces';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private stubAdmin: User = {
    name: 'Yuri',
    role: 'Admin',
    password: '1234567890',
    tasks: []
  };

  constructor(private router: Router, private userService: UserService) {
  }


  /**
   * Login user
   */
  userName: string;

  /**
   * Password user
   */
  password: string;

  loading: boolean;
  userType: any;

  ngOnInit(): void {
  }


  open() {}

  onSubmit() {
    this.loading = true;
    this.userService.updateUser({
      name: this.userName,
      role: 'admin',
      password: 'password',
      id: 1,
      tasks: []
    });
    this.router.navigate(['/main'])

  }

  onClear(){
    if (this.userName || this.password){
      this.userName = "";
      this.password = "";
    }
    return status = "success";
  }

  isUserName(): boolean {
    return !this.userName;
  }

  isPassword(): boolean {
    return !this.password;
  }

  submit() {

  }

  cancel() {

  }

  isChange (userNameInput: HTMLInputElement) {
    console.log(userNameInput.value);
    this.stubAdmin;
    if (userNameInput.value === this.stubAdmin.name) {
      console.log('Такой пользователь существует');
    } else {
      console.log('Такой пользователь не найден');
    }
  }

  isInput (passwordInput: HTMLInputElement) {
    console.log(passwordInput.value);
    this.stubAdmin;
    if (passwordInput.value === this.stubAdmin.password) {
      console.log('Верный пароль');
    } else {
      console.log('Пароль не верный')
    }
  }
}
