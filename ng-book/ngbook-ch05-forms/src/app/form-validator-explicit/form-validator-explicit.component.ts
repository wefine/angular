import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nb-form-validator-explicit',
  templateUrl: './form-validator-explicit.component.html',
  styleUrls: ['./form-validator-explicit.component.css']
})
export class FormValidatorExplicitComponent implements OnInit {
  myForm: FormGroup;
  // 显式实例变量，等价于 myForm.controls['sku']
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, skuValidator])]
    });
    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit(): void {
  }

}

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}
