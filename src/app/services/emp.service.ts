import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = 'http://dummy.restapiexample.com/api/v1/';

  getEmp(): Observable<any[]> {
    return this.httpClient.get(this.apiUrl + 'employees')
      .pipe(map((res: any[]) => res));
  }

  getEmpById(): Observable<any[]> {
    return this.httpClient.get(this.apiUrl + 'employees/1')
      .pipe(map((res: any[]) => res));
  }
}
