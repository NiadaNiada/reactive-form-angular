import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ageValidator} from '../custom-validators/age.validator';
import {InfoModel} from "../models/info.model";
import {DetailsService} from "../services/DetailsService";

@Component({
  selector: 'app-person-component',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {
  @Input() users: InfoModel[];

  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
  this.users = this.detailsService.getAllUsers();
  }


}
