import { Component, OnInit, Input } from '@angular/core';
import { HostListener  } from "@angular/core";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Game } from 'src/app/models/game';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { GameModalComponent } from 'src/app/components/game-modal/game-modal.component';

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.css']
})
export class GameListItemComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  closeResult = '';
  
  @Input() game: Game;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    console.log("did i receive game", this.game);
  }

  openModal() {
    const modalRef = this.modalService.open(GameModalComponent, {size:'xl'});
    modalRef.componentInstance.game = this.game;

}

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

}
