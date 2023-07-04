import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponents } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [MainPageComponents, ListComponent, AddCharacterComponent],
  imports: [CommonModule,FormsModule],
  exports: [MainPageComponents],
})
export class DbzModule {}
