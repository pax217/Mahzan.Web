import { Component, OnInit, ViewChild, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { GroupsService } from '../../../../../core/configuration/_services/groups.service';
import { ToastrService } from 'ngx-toastr';
import { ToastrResultService } from '../../../../../core/_base/crud/utils/toastr-result.service';
import { NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'kt-admin-groups',
  templateUrl: './admin.groups.component.html',
  styleUrls: ['./admin.groups.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AdminGroupsComponent implements OnInit, AfterViewInit {

  //Formularios
  searchGroupsForm: FormGroup;
  adminGroupForm: FormGroup;

  //Tabla 
  displayedGruposColumns = ['groupsId', 'name'];
  dataGruposSource: any;
  selection = new SelectionModel<Element>(true, []);
  @ViewChild('paginator', { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selectedGrupoRowIndex: number = -1;

  //Modal
  closeResult: string;

  constructor(
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private groupsService: GroupsService,
    private toastr: ToastrResultService,
    private modalService: NgbModal)
  {

  }


  ngOnInit()
  {

    this.formSearchGroups();

    this.formAdminGroup();

    this.getGroups();
  }

  formSearchGroups()
  {
    this.searchGroupsForm = this.formBuilder.group({
      name: ['', Validators.compose([
        //Validators.required,
        //Validators.minLength(3),
        //Validators.maxLength(100)
      ])
      ]
    });
  }

  formAdminGroup()
  {
    this.adminGroupForm = this.formBuilder.group({
      groupsId: ['', Validators.compose([
        //Validators.required,
        //Validators.minLength(3),
        //Validators.maxLength(320) 
      ])
      ],
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ])
      ],
    });
  }

  ngAfterViewInit() {
  }

  searchGroups() {
    const controls = this.searchGroupsForm.controls;


    let filter = {
      name: controls['name'].value,
      groupId: null
    };

    this.groupsService
      .get(filter)
      .then(
        (result: any) => {

          if (result.isValid) {

            this.dataGruposSource = new MatTableDataSource();
            this.dataGruposSource.data = result.groups;
            this.dataGruposSource.paginator = this.paginator;
            this.dataGruposSource.sort = this.sort;

            this.changeDetectorRef.detectChanges();

            this.toastr.showFromResult(result);
          }

        },
        errorHttp => {
          this.toastr.showFromError(errorHttp);
        }
      );


  }

  getGroups()
  {
    let filter = {
      name: null,
      groupsId: null
    };


    this.groupsService
      .get(filter)
      .then(
        (result: any) =>
        {
          if (result.isValid) {

            this.dataGruposSource = new MatTableDataSource();
            this.dataGruposSource.data = result.groups;
            this.dataGruposSource.paginator = this.paginator;
            this.dataGruposSource.sort = this.sort;

            this.changeDetectorRef.detectChanges();

            //this.toastrResultService.showFromResult(result);
          }
        },
        error =>
        {
          this.toastr.showFromError(error);
        }
     );
  }

  getGroupById(groupsId: string) {

    let filter = {
      name: null,
      groupsId: groupsId
    };

    this.groupsService
      .get(filter)
      .then(
        (result: any) => {

          if (result.isValid) {

            const controls = this.adminGroupForm.controls;

            controls['groupsId'].setValue(result.groups[0].groupsId);
            controls['name'].setValue(result.groups[0].name);


            this.toastr.showFromResult(result);
          }

        },
        error => {
          this.toastr.showFromError(error);
        }
      );
  }

  saveGroups(modalUpdate)
  {
    const controls = this.adminGroupForm.controls;

    if (controls['groupsId'].value == ''
      || controls['groupsId'].value == null)
    {
      /** check form */
      if (this.adminGroupForm.invalid) {
        Object.keys(controls).forEach(controlName =>
          controls[controlName].markAsTouched()
        );
        return;
      }

      let command = {
        Name: controls['name'].value,
      }

      this.groupsService
        .create(command)
        .then(
          (result: any) => {

            this.getGroups();

            this.toastr.showFromResult(result);
          },
          errorHttp => {
            this.toastr.showFromError(errorHttp);
          }
        );
    }
    else {
      this.modalService.open(modalUpdate);
    }
  }

  highlight(row) {
    this.selectedGrupoRowIndex = row.groupsId;
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.adminGroupForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  showModalDelete(modalDelete) {
    const controls = this.adminGroupForm.controls;

    if (controls['groupsId'].value == '' || controls['groupsId'].value == null) {
      this.toastr.show(3, 'Debes seleccionar un Grupo para poder eliminarlo.', 'Elimina Grupo');

      return;
    }
    else {
      this.modalService.open(modalDelete);
    }

  }

  deleteGroup() {
    const controls = this.adminGroupForm.controls;
    this.groupsService
      .delete(controls['groupsId'].value)
      .then(
        (result: any) => {
          this.getGroups();
          this.modalService.dismissAll();
          this.toastr.showFromResult(result);
          this.adminGroupForm.reset();
        },
        error => {
          this.toastr.showFromError(error);
        }
      );
  }
}
