import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cooperativesociety } from '../cooperativesociety';
import { CooperativesocietyService } from '../cooperativesociety.service';
import { Nominatedcandidate } from '../nominatedcandidate';
import { NominatedcandidateService } from '../nominatedcandidate.service';
import { Registeredsocietyvoters } from '../registeredsocietyvoters';
import { RegisteredsocietyvotersService } from '../registeredsocietyvoters.service';

@Component({
  selector: 'app-registeredsocietyvoters',
  templateUrl: './registeredsocietyvoters.component.html',
  styleUrls: ['./registeredsocietyvoters.component.css'],
})
export class RegisteredsocietyvotersComponent implements OnInit {
  registeredsocietyvoters: Registeredsocietyvoters =
    new Registeredsocietyvoters();

  nominatedcandidate: Nominatedcandidate = new Nominatedcandidate();

  cooperativesociety: Cooperativesociety = new Cooperativesociety();

  constructor(
    private _registeredSocietyVotersService: RegisteredsocietyvotersService,
    private _nominatedcandidateservice: NominatedcandidateService,
    private _cooperativesocietyservice: CooperativesocietyService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(value: any) {
    console.log(value);

    // this.registeredsocietyvoters.voterIdCardNo = value.voterIdCardNo;
    // this.registeredsocietyvoters.firstName = value.firstName;
    // this.registeredsocietyvoters.lastName = value.lastName;
    // this.registeredsocietyvoters.gender = value.gender;
    // this.registeredsocietyvoters.mobileNo = value.mobileNo;
    // this.registeredsocietyvoters.emailId = value.emailId;
    // this.registeredsocietyvoters.address = value.address;
    // this.registeredsocietyvoters.district = value.district;
    // this.registeredsocietyvoters.pincode = value.pincode;

    this.saveRegisteredSocietyVoters();
    this.saveCooperativeSociety();
    this.saveNominatedCandidate();
  }
  saveRegisteredSocietyVoters() {
    this._registeredSocietyVotersService
      .createRegisteredSocietyVoters(this.registeredsocietyvoters)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error)
      );
    //this.saveCooperativeSociety();
  }

  saveCooperativeSociety() {
    this._cooperativesocietyservice
      .createCooperativeSociety(this.cooperativesociety)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error)
      );
    // this.saveNominatedCandidate();
  }

  saveNominatedCandidate() {
    this._nominatedcandidateservice
      .createNominatedCandiate(this.nominatedcandidate)
      .subscribe(
        (data) => {
          console.log(data);
          alert("You have succesfully voted!")
        },
        (error) => console.log(error)
      );
      this.navigateToHome();
  }


navigateToHome() {
    this.router.navigate(['/main-page']);
  }
}

