

// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Metronic
import { PartialsModule } from '../../partials/partials.module';
import { CoreModule } from '../../../core/core.module';

//Module
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InlineSVGModule } from 'ng-inline-svg';
import { MatCardModule } from '@angular/material/card';
import { CodePreviewModule } from '../../partials/content/general/code-preview/code-preview.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

//Component
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

//Services
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesComponent } from './employees.component';
import { AdminEmployeesComponent } from './admin-employees/admin.employees.component';


import { EmployeesService } from '../../../core/employees/_services/employees.service';
import { MatIconModule } from '@angular/material/icon';
import { RolesService } from '../../../core/employees/_services/roles.service';

@NgModule({
  declarations: [
    EmployeesComponent,
    AdminEmployeesComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    CodePreviewModule,
    FormsModule,
    ReactiveFormsModule,
    PartialsModule,
    CoreModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeesComponent,
        children: [
          {
            path: 'admin-employees/admin',
            component: AdminEmployeesComponent,
          },
        ],
      },
    ]),
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    InlineSVGModule,
  ],
  providers: [
    EmployeesService,
    RolesService
  ],
})
export class EmployeesModule {
}
