import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cooperativesociety } from '../cooperativesociety';
import { CooperativesocietyService } from '../cooperativesociety.service';

@Component({
  selector: 'app-cooperativesociety',
  templateUrl: './cooperativesociety.component.html',
  styleUrls: ['./cooperativesociety.component.css'],
})
export class CooperativesocietyComponent implements OnInit {
  cooperativesociety: Cooperativesociety = new Cooperativesociety();
  constructor(
    // private _cooperativeSocietyService: CooperativesocietyService,
    // private router: Router
  ) {}

  ngOnInit(): void {}

  // onSubmit(value: any) {
  //   console.log(value);
    // this.cooperativesociety.societyName = value.societyName;
    // this.cooperativesociety.headOfSociety = value.headOfSociety;
    // this.cooperativesociety.village = value.village;
    // this.cooperativesociety.district = value.district;
    // this.cooperativesociety.pincode = value.pincode;

    // this.saveCooperativeSociety();
  }
  // saveCooperativeSociety() {
  //   this._cooperativeSocietyService
  //     .createCooperativeSociety(this.cooperativesociety)
  //     .subscribe(
  //       (data) => {
  //         console.log(data);
  //       },
  //       (error) => console.log(error)
  //     );
  //   //this.navigateToHome();
  // }

  /*navigateToHome() {
    this.router.navigate(['/main-page']);
  }*/

