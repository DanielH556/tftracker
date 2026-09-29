import { Component } from '@angular/core';
import { UnitButton } from '../common/unit-button/unit-button';
import unitData from '../../db/units.json' with { type: 'json' };
import { FormsModule } from '@angular/forms';
import { Unit } from '../common/unit/unit';
import { IUnit } from '../../interfaces/IUnit';

@Component({
  imports: [UnitButton, FormsModule, Unit],
  selector: 'app-units',
  styleUrl: './units.scss',
  templateUrl: './units.html',
})
export class Units {
  Math = Math;

  filterButtons = [
    { id: 1, name: "1c", classLabel: "one" },
    { id: 2, name: "2c", classLabel: "two" },
    { id: 3, name: "3c", classLabel: "three" },
    { id: 4, name: "4c", classLabel: "four" },
    { id: 5, name: "5c", classLabel: "five" }
  ]

  public unitsList: [string, IUnit][] = Object.entries(unitData).map(
    ([name, unit]) => [name, { ...unit, id: Number(unit.id) }]
  );

  selectedCost: number | null = null;

  setFilter(cost: number) {
    if (this.selectedCost === cost) {
      this.selectedCost = null;
    } else {
      this.selectedCost = cost;
    }
  }

  get filteredUnits() {
    console.log("getFilteredUnits")
    return this.selectedCost 
    ? this.unitsList.filter(([_, unit]) => unit.cost === this.selectedCost)
    : this.unitsList;
  }
}
