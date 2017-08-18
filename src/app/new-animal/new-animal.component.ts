import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
