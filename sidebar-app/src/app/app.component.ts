import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/services/mock-data.service';
import { SidebarService } from 'src/services/sidebar.service';
import { Company, Employee, Team, UserData } from '../interfaces/user.interface';


interface OutputItem {
  name: string;
  items?: OutputItem[];
  id?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sidebar-app';
  mockData: Company[] = []
  constructor(private mockDataService: MockDataService, protected readonly sidebarService: SidebarService) {

  }

  ngOnInit(): void {
    this.getData()
  }

  getData(): void{
    this.mockDataService.getData().subscribe((next: UserData[]) => {
      this.mockData =  this.transformData(next);
    })
  }



  transformData(data: Employee[]): any[] {
    const result: OutputItem[] = [];
    data.forEach(item => {
      const parts = item.name.split(' / ');
      let currentLevel: OutputItem[] = result;
  
      parts.forEach((part, index) => {
        let existingPart = currentLevel.find(({name}) => name === part);
        if (!existingPart) {
          existingPart = {
            name: part,
            items: [],
          };
          currentLevel.push(existingPart);
        }
        if (index === parts.length - 1) {
          existingPart.id = item.id;
          existingPart.name = parts[parts.length - 1];
          delete existingPart.items;
        } else {
          currentLevel = existingPart.items!;
        }
      });
    });
    console.log(result)
    return result;
 }

}