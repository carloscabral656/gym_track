import {
  Component,
  Input,
  forwardRef,
  signal,
  computed,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgIcon } from '@ng-icons/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gk-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NgIcon,
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() leftIcon?: string;
  @Input() rightIcon?: string;
  @Input() placeholder: string = 'Digite algo...';

  inputValue = signal<string>('');

  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor() {
    // Optional: inject NgControl if you want validation state
  }

  writeValue(value: any): void {
    this.inputValue.set(value || '');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Optional: handle disabling the component if needed
  }

  onInput(value: string) {
    this.inputValue.set(value);
    this.onChange(value);
  }

  onInputEvent(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onInput(input.value);
  }

  onBlur() {
    this.onTouched();
  }
}
