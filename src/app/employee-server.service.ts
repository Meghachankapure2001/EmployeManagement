import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServerService {

  constructor(private http:HttpClient) { }

  PostData(body:any)
  {
    return this.http.post("http://localhost:8080/saveEmpData" , body , {responseType: 'text' as 'json'});
  }

  getData()
  {
    return this.http.get("http://localhost:8080/getEmpData");
  }

  deleteData(id:number)
  {
    return this.http.delete("http://localhost:8080/deleteEmpData/"+id , {responseType: 'text' as 'json'});
  }
}
