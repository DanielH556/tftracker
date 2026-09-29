import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-unit-button',
  styleUrl: './unit-button.scss',
  templateUrl: './unit-button.html',
})
export class UnitButton {
  @Input() costLabel!: string;
  @Output() filter = new EventEmitter<number>();

  onClickFilter() {
    const cost = Number(this.costLabel.replace('c', ''));
    this.filter.emit(cost)
  }
}
