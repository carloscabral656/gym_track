import { Component, input } from '@angular/core';
import { WelcomeComponentComponent } from '../../components/welcome-component/welcome-component.component';
import { WeekStreakComponent } from '../../components/week-streak/week-streak.component';

@Component({
  selector: 'gk-home',
  imports: [WelcomeComponentComponent, WeekStreakComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
