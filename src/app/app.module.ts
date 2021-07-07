import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { ElectionofficerComponent } from './electionofficer/electionofficer.component';
import { VotedlistComponent } from './votedlist/votedlist.component';
import { AdminComponent } from './admin/admin.component';
import { NominatedcandidateComponent } from './nominatedcandidate/nominatedcandidate.component';
import { RegisteredsocietyvotersComponent } from './registeredsocietyvoters/registeredsocietyvoters.component';
import { CooperativesocietyComponent } from './cooperativesociety/cooperativesociety.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ElectionofficerComponent,
    VotedlistComponent,
    AdminComponent,
    NominatedcandidateComponent,
    RegisteredsocietyvotersComponent,
    CooperativesocietyComponent,
    VotedlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  exports:[
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
