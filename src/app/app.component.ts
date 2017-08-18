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
    new Animal('Meerkat', 'name', 1, 'diet', 'location', 2, 'sex', 'likes', 'dislikes'),
    new Animal('Tiger', 'Tony', 2, 'carnivore', 'SE Wing', 4, 'Female', 'Frosted Flakes', 'children climbing in for cuddles'),
    new Animal('Sloth', 'name', 3, 'herbivore', 'NE wing', 2, 'male', 'sleep', 'falling from branches'),
    new Animal('species', 'name', 4, 'diet', 'central', 2, 'sex', 'likes', 'dislikes'),
    new Animal('Polar Bear', 'name', 5, 'diet', 'NW wing', 2, 'Female', 'swimming', 'global warming'),
    new Animal('Penguin', 'Happy Feet', 2, 'carnivore', 'NW wing', 2, 'Male', 'dancing', 'global warming'),
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
