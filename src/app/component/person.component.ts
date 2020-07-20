import { Component, OnInit, Input } from '@angular/core';
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
