import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {} from ''



// import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { CampaignComponent } from './campaign/campaign.component';
import { UpdateCampaignComponent } from './update-campaign/update-campaign.component';
// import * as mydatepicker from 'mydatepicker';

@NgModule({
  declarations: [
    AppComponent,
   
    CreateCampaignComponent,
   
    CampaignComponent,
   
    UpdateCampaignComponent
  ],
  imports: [
    BrowserModule,
    // AngularDateTimePickerModule,
    // mydatepicker.MyDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
