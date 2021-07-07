import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NominatedcandidateService } from '../nominatedcandidate.service';
import { Nominatedcandidate } from '../nominatedcandidate';

@Component({
  selector: 'app-nominatedcandidate',
  templateUrl: './nominatedcandidate.component.html',
  styleUrls: ['./nominatedcandidate.component.css']
})
export class NominatedcandidateComponent implements OnInit {

    nominatedcandidate: Nominatedcandidate=new Nominatedcandidate();
   constructor( //private _nominatedCandidateService: NominatedcandidateService,
  //   private router: Router
    ) { }

  ngOnInit(): void {
  }

  // onSubmit(value: any) {
  //   console.log(value);
    // this.nominatedcandidate.candidateId = value.candidateId;
    // this.nominatedcandidate.nominationFormNo = value.nominationFormNo;

    // this.saveNominatedCandidate();

}
  // saveNominatedCandidate() {
    
  //   this._nominatedCandidateService
  //     .createNominatedCandiate(this.nominatedcandidate)
  //     .subscribe(
  //       (data) => {
  //         console.log(data);
  //       },
  //       (error) => console.log(error)
  //     );
  // }
  
  

