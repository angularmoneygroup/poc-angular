import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc-angular';
  rota: any
  constructor(private router: Router) {
    this.rota = this.router
  }

  isCollapsed = false;
}
