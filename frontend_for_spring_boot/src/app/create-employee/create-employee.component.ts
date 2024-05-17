import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private route: Router){

  }

  onSubmit(){
    this.insertEmployee();
    console.log(this.employee);
    
  }

  insertEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(resp => {
      this.goToEmployeeList();
      console.log('resp: ',resp);
      
    })
  }

  goToEmployeeList(){
    this.route.navigate(['/employees'])
  }

}
