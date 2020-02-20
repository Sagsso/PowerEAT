import { Component, OnInit, DoCheck, Input, AfterContentChecked } from '@angular/core';
@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  isDisabled: boolean = true;
  isOpen: boolean = false;
  mode: string = 'edit';

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {

  }

  onEdit($event: Event) {
    $event.preventDefault();
    if (this.isDisabled) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

}
