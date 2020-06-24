// Angular
import { Injectable } from '@angular/core';
// RxJS
import { BehaviorSubject } from 'rxjs';
// Object path
import * as objectPath from 'object-path';
// Services
import { MenuConfigService } from './menu-config.service';
// Http
import { HttpClient } from '@angular/common/http';
// Enviroment
import { environment } from '../../../../../environments/environment';



@Injectable()
export class MenuAsideService {
  // Public properties
  menuList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  /**
   * Service constructor
   *
   * @param menuConfigService: MenuConfigService
   */
  constructor(
    private menuConfigService: MenuConfigService,
    private http: HttpClient) {
    this.loadMenu();
  }

  /**
   * Load menu list
   */
  loadMenu() {

    this.getMenu()
      .then(
        (result: any) => {

          // get menu list
          //const menuItems: any[] = objectPath.get(this.menuConfigService.getMenus(), 'aside.items');

          this.menuList$.next(result.aside);
        }, error => {

        }
      );




  }

  getMenu():Promise<any>
  {
    return this.http.get<any>(`${environment.urlApi}/v1/Menu/aside`)
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
