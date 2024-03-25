import { Component, inject } from '@angular/core';

//Service
import { HousingService } from '../housing.service';

//Localização habitação
import { HousingLocationComponent } from '../housing-location/housing-location.component';

//interface
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  template: `
     <section>
    <form>
      <input type="text" placeholder="Filtrar por cidade">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
  <app-housing-location
  *ngFor="let housingLocation of housingLocationList"
  [housingLocation]="housingLocation"
  >

</app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
