import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-item-components-single',
  styleUrl: './item-components-single.scss',
  templateUrl: './item-components-single.html',
})
export class ItemComponentsSingle {
  @Input() id!: number;
  @Input() name?: string;
  @Input() iconUrl!: string;

}
