import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  standalone:true,
  imports: [CommonModule]
})
export class InputComponent implements OnInit {

  @Input() label: string = ''
  @Input() name: string = ''
  @Input() id: string = ''
  @Input() placeholder: string = ''
  @Input() type: string = ''

  constructor() { }

  ngOnInit() {
  }

}
