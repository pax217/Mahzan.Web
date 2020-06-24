import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable()
export class EmployeesService {

  constructor(private http: HttpClient) { }

  get(filter: any): Promise<any> {

    let params = new HttpParams()

    if (filter.EmployeeId != null) {
      params = params.set('EmployeeId', filter.EmployeeId);
    }

    if (filter.CodeEmployee != null) {
      params = params.set('CodeEmployee', filter.CodeEmployee);
    }

    if (filter.FirstName != null) {
      params = params.set('FirstName', filter.FirstName);
    }

    
    return this.http.get<any>(`${environment.urlApi}/v1/Employees`,
      {
        params: params
      })
      .toPromise()
      .then(resultado => {
        return resultado;
      })
      .catch(err => {

        return Promise.reject(err);
      }
      );
  }

  create(command: any): Promise<any>
  {
    return this.http.post<any>(`${environment.urlApi}/v1/Employees/create`,
      command)
      .toPromise()
      .then(resultado => {
        return resultado;
      })
      .catch(err => {

        return Promise.reject(err);
      });
  }
}
