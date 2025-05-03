import { Component } from '@angular/core';
import { MainLoginContainerComponent } from '../../components/main-login-container/main-login-container.component';

@Component({
  selector: 'gk-login',
  imports: [MainLoginContainerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
