import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable()
export class GroupsService
{

  constructor(private http: HttpClient) { }

  get(filter: any): Promise<any>
  {
    let params = new HttpParams()

    if (filter.groupsId != null)
    {
      params = params.set('groupsId', filter.groupsId);
    }

    if (filter.name != null)
    {
      params = params.set('name', filter.name);
    }

    return this.http.get<any>(`${environment.urlApi}/v1/Groups`,
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

  create(command: any): Promise<any> {
    return this.http.post<any>(`${environment.urlApi}/v1/Groups/create`,
      command)
      .toPromise()
      .then(resultado => {
        return resultado;
      })
      .catch(err => {

        return Promise.reject(err);
      });
  }

  delete(groupsId: string): Promise<any> {
    return this.http.delete<any>(`${environment.urlApi}/v1/Groups/delete`,
      {
        params: {
          groupsId: groupsId
        }
      })
      .toPromise()
      .then(resultado => {
        return resultado;
      })
      .catch(err => {

        return Promise.reject(err);
      });
  }

  update(putGroupRequest: any): Promise<any> {
    return this.http.put<any>(`${environment.urlApi}/v1/Groups/update`,
      putGroupRequest)
      .toPromise()
      .then(resultado => {
        return resultado;
      })
      .catch(err => {

        return Promise.reject(err);
      }
      );
  }

}
