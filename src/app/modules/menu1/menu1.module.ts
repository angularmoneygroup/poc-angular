import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1Component } from './menu1.component';
import { NgZorroAntdModule } from 'src/app/shared/library/ng-zorro-antd/ng-zorro-antd.module';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from 'src/app/shared/layouts/inputs/inputs.component';
const routes: Routes = [
  {
    path: '',
    component: Menu1Component,
  },
];
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes),
    InputComponent,
  ],
  declarations: [Menu1Component],
})
export class Menu1Module {}
