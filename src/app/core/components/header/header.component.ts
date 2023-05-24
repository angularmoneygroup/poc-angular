import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[CommonModule, NzIconModule, RouterModule],
})
export class HeaderComponent implements OnInit {

  rota: any
  constructor(private router: Router) {
    this.rota = this.router
  }

  ngOnInit() {
  }

}
