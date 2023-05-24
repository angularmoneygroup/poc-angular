import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from 'src/app/shared/layouts/inputs/inputs.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
const router = [
  {
    path: '',
    component: AuthComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    InputComponent,
    NzIconModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
