import { Component, signal } from '@angular/core';
import { Units } from './components/units/units';
import { ItemComponents } from './components/item-components/item-components';
import { Artifacts } from './components/artifacts/artifacts';
import { CompTypeFilter } from './components/comp-type-filter/comp-type-filter';
import { CompList } from './components/comp-list/comp-list';
import { CompNameDisplay } from './components/common/comp-name-display/comp-name-display';
import { AugmentsList } from './components/common/augments-list/augments-list';
import { EmblemList } from './components/common/emblem-list/emblem-list';

@Component({
  imports: [Units, ItemComponents, Artifacts, CompTypeFilter, CompList, CompNameDisplay, AugmentsList, EmblemList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tfthelper');
}
