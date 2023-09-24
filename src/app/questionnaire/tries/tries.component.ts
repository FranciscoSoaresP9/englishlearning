import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tries',
  templateUrl: './tries.component.html',
  styleUrls: ['./tries.component.scss']
})
export class TriesComponent {
  @Input('tries')
  tries: number = 0
}
