import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})

export class ListEmployeeComponent {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private route: Router){

  }

  ngOnInit():void {
    this.getEmployeeList()
  }

  private getEmployeeList(){
    this.employeeService.getEmployeeList().subscribe(resp => {
      this.employees = resp;
    })
  }

  updateEmployee(id: number){
    this.route.navigate(['update-employee',id])
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployeeById(id).subscribe(resp => {
      this.getEmployeeList()
    });

  }

  viewEmployee(id: number){
    this.route.navigate(['employee-details',id])
  }

}
