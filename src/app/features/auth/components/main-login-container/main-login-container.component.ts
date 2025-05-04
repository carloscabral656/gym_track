import { Component } from '@angular/core';
import { InputComponent } from '../../../../shared/components/forms/input/input.component';
import { ButtonComponent } from '../../../../shared/components/forms/button/button.component';
import { LogWithOtherServiceComponent } from '../log-with-other-service/log-with-other-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'gk-main-login-container',
  imports: [InputComponent, ButtonComponent, LogWithOtherServiceComponent],
  templateUrl: './main-login-container.component.html',
  styleUrl: './main-login-container.component.scss',
})
export class MainLoginContainerComponent {
  constructor(private readonly router: Router) {}

  redirectToCreateUser() {
    this.router.navigateByUrl('/registration/user-registration');
  }
}
