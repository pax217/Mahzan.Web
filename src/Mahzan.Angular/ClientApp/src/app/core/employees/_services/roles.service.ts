import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable()
export class RolesService {

  constructor(private http: HttpClient) { }

  get(): Promise<any> {

    return this.http.get<any>(`${environment.urlApi}/v1/Roles`)
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
