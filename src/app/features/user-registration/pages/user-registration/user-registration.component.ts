import { Component } from '@angular/core';
import { InputComponent } from '../../../../shared/components/forms/input/input.component';
import { ButtonComponent } from '../../../../shared/components/forms/button/button.component';

@Component({
  selector: 'gk-user-registration',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss',
})
export class UserRegistrationComponent {}
