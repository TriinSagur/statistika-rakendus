import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormField } from './form-field';
import { FormControl,
  FormGroup,
  ValidatorFn,
  Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './tagasiside.component.html'
})
export class DynamicFormComponent implements OnInit {

  formFields: FormField[];
  form = new FormGroup({});

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<FormField[]>("./tagasiside.json").subscribe((formFields) => {
      for (const formField of formFields) {
        this.form.addControl(formField.fieldName, new FormControl('',this.getValidator(formField)));
      }
      this.formFields = formFields;
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      let value = this.form.value;
    }
  }

  private getValidator(formField: FormField): ValidatorFn {
    switch(formField.validator) {
      case "email":
        return Validators.email;
      case "required":
        return Validators.required;
      default:
        // @ts-ignore
        return null;
    }
  }

}
