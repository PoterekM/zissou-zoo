import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent implements OnInit {
  @Output() newAnimalSender = new EventEmitter();

  addingAnimal = false;

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.addingAnimal = false;
    this.newAnimalSender.emit(newAnimalToAdd);
  }

  constructor() { }

  ngOnInit() {
  }

  addNewAnimal() {
    this.addingAnimal = true;
  }

}
