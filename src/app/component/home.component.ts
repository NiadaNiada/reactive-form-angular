import {Component, OnInit} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {DetailsService} from "../services/DetailsService";
import {InfoModel} from "../models/info.model";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  closeRes = '';
  users: InfoModel[];

  constructor(private modalService: NgbModal, private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.users = this.detailsService.getAllUsers();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     // this.closeResult = result;
    }, (reason) => {
      this.closeRes = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  onClose() {
    this.users = this.detailsService.getAllUsers();
    this.modalService.dismissAll();
  }

  onAdd(user: InfoModel) {
    this.detailsService.addUser(user);
    this.modalService.dismissAll();
    this.users = this.detailsService.getAllUsers();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
