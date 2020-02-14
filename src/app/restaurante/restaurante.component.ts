import { Component, OnInit, DoCheck } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  isDisabled: boolean = true;
  colorCheck: ThemePalette = "primary";
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
