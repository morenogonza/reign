import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatButtonModule, MatButtonToggleModule, MatIconModule, MatSelectModule, MatProgressSpinnerModule],
})
export class MaterialModule {}
