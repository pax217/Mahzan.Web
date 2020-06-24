import { Component, OnInit, ViewChild, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToastrResultService } from '../../../../core/_base/crud/utils/toastr-result.service';
import { EmployeesService } from '../../../../core/employees/_services/employees.service';
import { RolesService } from '../../../../core/employees/_services/roles.service';

@Component({
  selector: 'kt-admin-employees',
  templateUrl: './admin.employees.component.html',
  styleUrls: ['./admin.employees.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AdminEmployeesComponent implements OnInit, AfterViewInit {

  //Formularios
  searchEmployeesForm: FormGroup;
  adminEmployeeForm: FormGroup;

  //Tabla 
  displayedEmployeesColumns = ['employeeId', 'firstName','secondName','lastName','sureName'];
  dataEmployeesSource: any;
  selection = new SelectionModel<Element>(true, []);
  @ViewChild('paginator', { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selectedEmployeeRowIndex: number = -1;

  //Models
  listRoles: any;
  closeResult: string;

  constructor(
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private toastr: ToastrResultService,
    private modalService: NgbModal,
    private employeesService: EmployeesService,
    private rolesService: RolesService) {

  }

  ngOnInit() {

    this.initializeSearchEmployeeForm();

    this.initializeAdminEmployeeForm();

    this.getEmployees();

    this.getRoles();

  }

  getRoles() {
    this.rolesService
      .get()
      .then(
        (result: any) => {

          this.listRoles = result;

        }
      );
  }

  ngAfterViewInit() {

  }

  initializeSearchEmployeeForm() {
    this.searchEmployeesForm = this.formBuilder.group({
      codeEmployee: ['', Validators.compose([
        //Validators.required,
        //Validators.minLength(3),
        //Validators.maxLength(100)
      ])
      ],
      fistName: ['', Validators.compose([
        //Validators.required,
        //Validators.minLength(3),
        //Validators.maxLength(100)
      ])
      ],
    });
  }

  initializeAdminEmployeeForm()
  {
    this.adminEmployeeForm = this.formBuilder.group({
      employeeId: ['', Validators.compose([
        //Validators.required,
        //Validators.minLength(3),
        //Validators.maxLength(320) 
      ])
      ],
      roleId: ['', Validators.compose([
        Validators.required,
        //Validators.minLength(3),
        //Validators.maxLength(320) 
      ])
      ],
      codeEmployee: ['', Validators.compose([
        //Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ])
      ],
      fistName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ])
      ],
      secondName: ['', Validators.compose([
        //Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ])
      ],
      lastName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ])
      ],
      sureName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ])
      ],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])
      ],
      phone: ['', Validators.compose([
        //Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ])
      ],
      userName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ])
      ],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ])
      ],
    });
  }

  searchEmployees() {

  }

  getEmployees() {

    let filter = {
      EmployeeId : null,
      CodeEmployee : null,
      FirstName : null
    };


    this.employeesService
      .get(filter)
      .then(
        (result: any) => {

            this.dataEmployeesSource = new MatTableDataSource();
            this.dataEmployeesSource.data = result.employees;
            this.dataEmployeesSource.paginator = this.paginator;
            this.dataEmployeesSource.sort = this.sort;

            this.changeDetectorRef.detectChanges();

            //this.toastrResultService.showFromResult(result);

        },
        error => {
          this.toastr.showFromError(error);
        }
    );
  }

  getEmployeeById(employeeId)
  {
    let filter = {
      EmployeeId: employeeId,
      CodeEmployee: null,
      FirstName: null
    };


    this.employeesService
      .get(filter)
      .then(
        (result: any) => {

          const controls = this.adminEmployeeForm.controls;

          controls['employeeId'].setValue(result.employees[0].employeeId);
          controls['codeEmployee'].setValue(result.employees[0].codeEmployee);
          controls['roleId'].setValue(result.employees[0].roleId);
          controls['fistName'].setValue(result.employees[0].firstName);
          controls['secondName'].setValue(result.employees[0].secondName);
          controls['lastName'].setValue(result.employees[0].lastName);
          controls['sureName'].setValue(result.employees[0].sureName);
          controls['email'].setValue(result.employees[0].email);
          controls['phone'].setValue(result.employees[0].phone);
          controls['userName'].setValue(result.employees[0].userName);
          controls['password'].setValue(result.employees[0].password);

        },
        error => {
          this.toastr.showFromError(error);
        }
      );
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.adminEmployeeForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  showModalDelete(modalDelete) { }

  saveEmployee(modalUpdate) {

    const controls = this.adminEmployeeForm.controls;

    if (controls['employeeId'].value == ''
      || controls['employeeId'].value == null)
    {
      /** check form */
      if (this.adminEmployeeForm.invalid) {
        Object.keys(controls).forEach(controlName =>
          controls[controlName].markAsTouched()
        );
        return;
      }

      let command = {
        roleId : controls['roleId'].value,
        codeEmploye: controls['codeEmployee'].value,
        firstName: controls['fistName'].value,
        secondName: controls['secondName'].value,
        lastName: controls['lastName'].value,
        sureName: controls['sureName'].value,
        email: controls['email'].value,
        phone: controls['phone'].value,
        userName: controls['userName'].value,
        password: controls['password'].value,
      }

      this.employeesService
        .create(command)
        .then(
          (result: any) => {

            this.getEmployees();

            this.toastr.showFromResult(result);
          },
          errorHttp => {
            this.toastr.showFromError(errorHttp);
          }
        );
    }
    else
    {
      this.modalService.open(modalUpdate);
    }
  }

  deleteGroup() { }

  updateGroup() { }

  highlight(row) {
    this.selectedEmployeeRowIndex = row.employeeId;
  }
}
