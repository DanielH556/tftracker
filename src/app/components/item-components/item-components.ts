import { Component } from '@angular/core';
import itemComponentsData from '../../db/components.json';
import { IComponents } from '../../interfaces/IComponents';
import { ItemComponentsSingle } from '../common/item-components-single/item-components-single';

@Component({
  imports: [ItemComponentsSingle],
  selector: 'app-item-components',
  styleUrl: './item-components.scss',
  templateUrl: './item-components.html',
})
export class ItemComponents {
  public componentsList: IComponents[] = itemComponentsData;


  enableItem(id: number) {
    console.log("item: " + id)
  }
}
