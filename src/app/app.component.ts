import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Zissou Zoo';
  masterAnimalList: Animal [] = [
    new Animal('Meerkat', 'Maiya', 1, 'omnivore', 'SE Loop', 2, 'Female', 'Burrowing', 'Alarm calls'),
    new Animal('Tiger', 'Tony', 2, 'carnivore', 'SE Wing', 4, 'Female', 'Frosted Flakes', 'children climbing in for cuddles'),
    new Animal('Sloth', 'name', 3, 'herbivore', 'NE wing', 2, 'male', 'sleep', 'falling from branches'),
    new Animal('Platypus', 'Patty', 1, 'carnivore', 'central', 1, 'Female', 'shrip', 'BeanieBabies'),
    new Animal('Polar Bear', 'name', 5, 'diet', 'NW wing', 2, 'Female', 'swimming', 'global warming'),
    new Animal('Penguin', 'Happy Feet', 1, 'carnivore', 'NW wing', 2, 'Male', 'dancing', 'global warming'),
  ];

  selectedAnimal = null;

  editAnimal(currentAnimal) {
    this.selectedAnimal = currentAnimal;
  }

  editComplete() {
    this.selectedAnimal = null;
  }

  newAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
