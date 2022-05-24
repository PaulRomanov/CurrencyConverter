import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionComponent } from './conversion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConversionComponent],
  exports: [ConversionComponent]
})
export class ConversionModule { }
