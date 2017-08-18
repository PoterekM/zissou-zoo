import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})

export class EditAnimalComponent implements OnInit {
  @Input() childSelectedAnimal: Animal;
  @Output() editCompleteButtonSender = new EventEmitter();

  ngOnInit() {
  }

  editCompleteButtonClicked() {
    this.editCompleteButtonSender.emit()
  }
}
