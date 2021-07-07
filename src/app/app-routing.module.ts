import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ElectionofficerComponent } from './electionofficer/electionofficer.component';
import { VotedlistComponent } from './votedlist/votedlist.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'electionofficer-page', component: ElectionofficerComponent },
  { path: 'voter-page', component: VotedlistComponent },
  { path: 'admin-page', component: AdminComponent },
  { path: 'votedlist', component: VotedlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
