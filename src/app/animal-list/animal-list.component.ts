import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../animal.model';


@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  @Input() childAnimalList: Animal[];
  @Output() editButtonClickedSender = new EventEmitter();

  ngOnInit() {
  }

  editButtonClicked(currentAnimal) {
    this.editButtonClickedSender.emit(currentAnimal);
  }


}
