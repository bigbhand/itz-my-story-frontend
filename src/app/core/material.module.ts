import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, 
         MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatDatepickerModule, 
         MatNativeDateModule, MatCheckboxModule, MatBadgeModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatGridListModule,
  MatCheckboxModule,
  MatBadgeModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatRadioModule,
   MatGridListModule,
   MatCheckboxModule,
   MatBadgeModule
   ],
})
export class CustomMaterialModule { 
}