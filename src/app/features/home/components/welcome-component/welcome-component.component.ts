import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'gk-welcome-component',
  imports: [],
  templateUrl: './welcome-component.component.html',
  styleUrl: './welcome-component.component.scss',
})
export class WelcomeComponentComponent {
  name = input.required<string>();

  now = signal<Date>(new Date());

  partOfTheDay = computed(() => {
    const hour = this.now().getHours();
    return this.greeting(hour);
  });

  constructor() {}

  greeting(hour: number): string {
    if (hour >= 0 && hour < 12) {
      return 'Bom dia';
    } else if (hour >= 12 && hour < 18) {
      return 'Boa tarde';
    } else if (hour >= 18 && hour < 24) {
      return 'Boa noite';
    } else {
      return 'Hora inválida!';
    }
  }
}
