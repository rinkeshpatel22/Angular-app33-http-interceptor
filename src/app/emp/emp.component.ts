import { Component, OnInit } from '@angular/core';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  public empList: any[];
  constructor(private empService: EmpService) { }

  ngOnInit() {
  }

  public getEmpList(): void {
    this.empService.getEmp()
    .subscribe(res => { 
      alert('GET call sucessfull');
    });
  }

  public getEmpById(): void {
    this.empService.getEmpById()
      .subscribe(res => {
        alert('GETById call sucessfull');
      }, error =>{
        // as we have handled error from interceptor at common level, this section will not be executed.
        alert('Error caught in component');
      });
  }

}
