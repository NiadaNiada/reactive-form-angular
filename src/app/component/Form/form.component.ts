import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ageValidator} from '../../custom-validators/age.validator';
import {DetailsService} from "../../services/DetailsService";
import {InfoModel} from "../../models/info.model";

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  gender: any = ['Female', 'Male'];
  @Output() save = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private detailsService: DetailsService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      age: [null, [Validators.pattern("(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)"), ageValidator(18, 100)]],
      email: ['', [Validators.required, Validators.email]],
      gender: [null, [Validators.required]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(personForm: FormGroup) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const formValue = personForm.value;
    this.save.emit(formValue);
    this.detailsService.addUser(formValue);
    this.registerForm.reset(' ');
    this.submitted = false;
  }
  onCancel() {

  }
}
