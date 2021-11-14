import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';

import { MatDividerModule } from '@angular/material/divider';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';

import { MatTooltipModule } from '@angular/material/tooltip';

import { MatTabsModule } from '@angular/material/tabs';

import { MatGridListModule } from '@angular/material/grid-list';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatSelectModule } from '@angular/material/select';

import { MatStepperModule } from '@angular/material/stepper';

import { MatTableModule } from '@angular/material/table';

import { MatPaginatorModule } from '@angular/material/paginator';

import { MatRadioModule } from '@angular/material/radio';

import { MatBadgeModule } from '@angular/material/badge';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatDividerModule,
  MatToolbarModule,
  MatCardModule,
  MatTooltipModule,
  MatTabsModule,
  MatGridListModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule,
  MatPaginatorModule,
  MatRadioModule,
  MatBadgeModule,
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
