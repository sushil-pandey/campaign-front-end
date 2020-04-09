import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{CreateCampaignComponent} from '../app/create-campaign/create-campaign.component'
import{CampaignComponent} from '../app/campaign/campaign.component'
import{UpdateCampaignComponent} from '../app/update-campaign/update-campaign.component'


const routes: Routes = [
  {path: 'add', component:CreateCampaignComponent},

{ path: 'view', component:CampaignComponent},
{ path: 'update', component:UpdateCampaignComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
