import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from 'src/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  implements OnInit{
  @Input() extraClass = '';
  @Input() rounded = false;
  @Input() companies: any
  containsName: boolean = false
  constructor(readonly sidebarService: SidebarService) {}


  ngOnInit(): void {
    this.checkItemsForName(this.companies)
  }


  checkItemsForName(items: any): boolean {
    for (const item of items) {
      if (item.hasOwnProperty('name')) {
        return true;
      }
      if (item.hasOwnProperty('items')) {
        const containsName = this.checkItemsForName(item.items);
        if (containsName) {
          return true;
        }
      }
    }
    return false;
  }
}
