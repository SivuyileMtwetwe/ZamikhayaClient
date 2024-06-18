import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-one-card',
  templateUrl: './one-card.component.html',
  styleUrls: ['./one-card.component.css']
})
export class OneCardComponent {

    constructor() {}

  @Input() properties: any[] = [];


  // getAllProperties(): void {
  //   this._propertyService.getAllProperties().subscribe({
  //     next: (properties: any) => {
  //       this.property = properties;
  //       this.filteredProperty = properties;
  //     },
    
  //   });
  // }

  // onSelect(property: any): void {
  //   this._propertyService.getPropertyById(property.id).subscribe(
  //     next: (res) => {
  //       this.property = res;
        
  //     },
  // }
}