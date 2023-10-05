import { Component } from '@angular/core';
import { EmployeeServerService } from '../employee-server.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private service:EmployeeServerService)
  {

  }

  empData:any=
  {
    empId :"",
    empName: "",
    empPhone: "",
    empCity: "",
    empCompany: "",
    empSalary: "",
    empAnnual: ""
}

id:number = 0;

data:any;

ngOnInit() :void
{
  this.getData();
}


saveData()
{
  let resp = this.service.PostData(this.empData);
  resp.subscribe
  (
    (success) =>
    {
      alert(success)
    },
    (error) =>
    {
      alert(error)
    }
  )
}


getData()
{
  let resp = this.service.getData()

  resp.subscribe
  (
    (respData) =>
    {
      this.data = respData
    }
  )
}


deleteData()
{
    let resp = this.service.deleteData(this.id);
    resp.subscribe(
      (data) =>
      {
        alert(data);
      }
    )
}

}
