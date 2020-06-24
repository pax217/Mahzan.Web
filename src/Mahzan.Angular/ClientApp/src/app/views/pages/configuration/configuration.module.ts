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
import { ConfigurationComponent } from './configuration.component';
import { IndexComponent } from './work-enviroment/index.component';
import { AdminGroupsComponent } from './work-enviroment/groups/admin.groups.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

//Services
import { GroupsService } from '../../../core/configuration/_services/groups.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ConfigurationComponent,
    IndexComponent,
    AdminGroupsComponent
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
        component: ConfigurationComponent,
        children: [
          {
            path: 'work-enviroment/index',
            component: IndexComponent,
          },
          {
            path: 'work-enviroment/groups/admin',
            component: AdminGroupsComponent,
          },
        ],
      },
    ]),
    MatSelectModule,
    MatInputModule,
    InlineSVGModule,
  ],
  providers: [
    GroupsService,
  ],
})
export class ConfigurationModule {
}
