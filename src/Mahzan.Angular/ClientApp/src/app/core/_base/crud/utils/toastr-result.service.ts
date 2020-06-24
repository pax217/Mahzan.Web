/** Angular */
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable()
export class ToastrResultService {

    constructor(private toastr: ToastrService)
    {

    }

    showFromResult(result: any)
    {
        switch (result.resultTypeEnum) {
            case 0:
                this.toastr.success(result.message, result.title);
                break;
            case 1:
                this.toastr.error(result.message, result.title);
                break;
            case 2:
                this.toastr.warning(result.message, result.title);
                break;
            case 3:
                this.toastr.info(result.message, result.title);
                break;
            default:
        }
    }

  showFromError(errorHttp: any) {
      if ('error' in errorHttp)
      {
        switch (errorHttp.error.resultTypeEnum) {
          case 0:
            this.toastr.success(errorHttp.error.message, errorHttp.error.title);
            break;
          case 1:
            this.toastr.error(errorHttp.error.message, errorHttp.error.title);
            break;
          case 2:
            this.toastr.warning(errorHttp.error.message, errorHttp.error.title);
            break;
          case 3:
            this.toastr.info(errorHttp.error.message, errorHttp.error.title);
            break;
          default:
        }
        return;
      }
      else
      {
        this.toastr.error(errorHttp.message, errorHttp.statusText);
        return;
      }


    }

    show(
        type: number,
        title: string,
		    message: string)
    {
        switch (type) {
            case 0:
                this.toastr.success(message, title);
                break;
            case 1:
                this.toastr.error(message, title);
                break;
            case 2:
                this.toastr.warning(message, title);
                break;
            case 3:
                this.toastr.info(message, title);
                break;
            default:
        }
    }
}
