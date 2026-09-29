import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Units } from './components/units/units';
import { ItemComponents } from './components/item-components/item-components';

@Component({
  imports: [RouterOutlet, Units, ItemComponents],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tfthelper');
}
