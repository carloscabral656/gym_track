import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { cva } from 'class-variance-authority';

@Component({
  selector: 'gk-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  content = input<string | undefined>(undefined);
  intent = input<'primary' | 'secondary' | 'tertiary'>('primary');

  private button = cva(
    'font-medium cursor-pointer py-1 px-2 border rounded-[0.5rem] w-full h-full',
    {
      variants: {
        intent: {
          primary:
            'bg-[#317d25] !text-[#ffffff] !border-[#317d25] !border-[2px]',
          secondary:
            '!bg-transparent !text-[#ffffff] !border-[2px] border-[#ffffff]',
          tertiary: 'bg-gray-100 text-black border-gray-300',
        },
      },
      defaultVariants: {
        intent: 'primary',
      },
    }
  );

  get classNames() {
    return this.button({ intent: this.intent() });
  }
}
