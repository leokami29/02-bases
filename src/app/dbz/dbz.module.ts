import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponents } from './pages/main-page.component';

@NgModule({
  declarations: [MainPageComponents],
  imports: [CommonModule],
  exports: [MainPageComponents],
})
export class DbzModule {}
