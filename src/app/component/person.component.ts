import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ageValidator} from '../custom-validators/age.validator';

@Component({
  selector: 'app-person-component',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  persons: any[];
  @Output() save = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      age: [null, [Validators.required, ageValidator(18, 100)]],
      email: ['', [Validators.required, Validators.email]]
    });
    this.persons = [{
      name: 'Diana',
      age: '30',
      email: 'diana@gmail.com'
    }];
  }

  get f() { return this.registerForm.controls; }

  onSubmit(personForm: FormGroup) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const formValue = personForm.value;
    this.save.emit(formValue);
    this.persons = this.persons.concat(formValue);
    this.registerForm.reset(' ');
    this.submitted = false;
  }
}
