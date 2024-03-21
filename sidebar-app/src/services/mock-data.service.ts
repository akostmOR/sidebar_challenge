import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from 'src/interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.dataUrl);
  }

}
