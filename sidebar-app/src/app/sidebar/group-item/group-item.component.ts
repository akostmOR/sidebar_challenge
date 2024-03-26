import { Component, Input } from '@angular/core';
import { Item } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss'],
})
export class GroupItemComponent {
  @Input({ required: true }) item!: Item;
}
