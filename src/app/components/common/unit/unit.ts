import { Component, Input } from '@angular/core';
import { IUnit } from '../../../interfaces/IUnit';

@Component({
  imports: [],
  selector: 'app-unit',
  styleUrl: './unit.scss',
  templateUrl: './unit.html',
})
export class Unit {
  @Input() unit!: IUnit;
  @Input() name?: string;

  @Input() cost!: number;
  @Input() trait?: string;
  @Input() trait2?: string;
  @Input() origin?: string;
  @Input() origin2?: string;
  @Input() icon?: string;
}
