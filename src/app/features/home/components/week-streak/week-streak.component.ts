import { CommonModule } from '@angular/common';
import { Component, input, Input, signal, WritableSignal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'gk-week-streak',
  imports: [CommonModule, NgIcon],
  templateUrl: './week-streak.component.html',
  styleUrl: './week-streak.component.scss',
})
export class WeekStreakComponent {
  completed = input<boolean[]>([true]);
  daysOfTheWeek: WritableSignal<string[]> = signal([
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sáb',
  ]);
}
