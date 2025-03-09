import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { multicast } from 'rxjs';

type InputType = 'text' | 'password' | 'email';

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryInputComponent),
      multi: true
    }
  ],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent implements ControlValueAccessor{

  @Input() type: InputType = 'text';
  // @Input() formName: string = "";
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";


  value : string = "";
  onChange : any = () => {};
  onTrouched : any = () => {};


  onInput(event: Event){
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value);
  }

  writeValue(value: any):void{
    this.value = value;
  }

  registerOnChange(fn: any): void {
      this.onChange = fn
  }

  setDisabledState(isDisabled: boolean): void {}

  registerOnTouched(fn: any): void {
    this.onTrouched = fn;
  }

}
