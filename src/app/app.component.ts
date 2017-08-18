import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zooberz';
  masterAnimalList: Animal [] = [
    new Animal('species', 'name', 2, 'diet', 'location', 2, 'sex', 'likes', 'dislikes'),
    new Animal('Tiger', 'Tony', 4, 'carnivore', 'SE Wing', 4, 'Female', 'lounging in sun', 'children climbing in for cuddles')
  ];

  selectedAnimal = null;

  editAnimal(currentAnimal) {
    this.selectedAnimal = currentAnimal;
  }
}
