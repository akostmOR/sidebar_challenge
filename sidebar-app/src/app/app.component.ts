import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/services/mock-data.service';
import { SidebarService } from 'src/services/sidebar.service';
import { Company, Employee, Team, UserData } from '../interfaces/user.interface';

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



  transformData(data: Employee[]): Company[] {
    const groupedData: Company[] = [];

    data.forEach(({ id, name }) => {
      const [companyName, teamName, employeeName] = name.split(' / ');

      let company = groupedData.find(c => c.name === companyName);
      if (!company) {
        company = { name: companyName, items: [] };
        groupedData.push(company);
      }

      if (teamName) {
        let team = company.items.find((item: any) => 'name' in item && item.name === teamName) as Team;
        if (!team) {
          team = { name: teamName, items: [] };
          company.items.push(team);
        }
        team.items.push({ id, name: employeeName });
      } else {
        company.items.push({ id, name: employeeName });
      }
    });
    
    return groupedData;
  }
}

