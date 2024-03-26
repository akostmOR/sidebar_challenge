import { Component, Input } from '@angular/core';
import { Item } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  @Input({ required: true }) item!: Item;
}
