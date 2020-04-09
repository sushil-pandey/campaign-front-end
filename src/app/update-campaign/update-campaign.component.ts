import { Component, OnInit } from '@angular/core';
import{ApiService} from '../shared/api.service'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-campaign',
  templateUrl: './update-campaign.component.html',
  styleUrls: ['./update-campaign.component.css']
})
export class UpdateCampaignComponent implements OnInit {
updatecampaign
editcampaign
  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.updatecampaign= this.api.getcampaign();
    console.log(this.updatecampaign); 

    

    this.editcampaign = new FormGroup({
      name: new FormControl(this.updatecampaign.name, [Validators.required, Validators.minLength(2)]),
      // minDate: new FormControl(''),
      // maxDate: new FormControl(''),
      campDate: new FormControl([this.updatecampaign.campDate, '']),
      currency: new FormControl(this.updatecampaign.currency, Validators.required),
      tbudget: new FormControl(this.updatecampaign.tbudget, Validators.required),
      dbudget: new FormControl(this.updatecampaign.dbudget),
      timp: new FormControl(this.updatecampaign.timp),
      dimp: new FormControl(this.updatecampaign.dimp),
      pmpid: new FormControl(this.updatecampaign.pmpid),
      minbid: new FormControl(this.updatecampaign.minbid),
      maxbid: new FormControl(this.updatecampaign.maxbid),
      startTime: new FormControl(this.updatecampaign),
      endTime: new FormControl(this.updatecampaign),
      timeZone: new FormControl(this.updatecampaign, Validators.required),
      trafficSource: new FormControl(this.updatecampaign, Validators.required),
      frequency: new FormControl(this.updatecampaign),
      optimizeBy: new FormControl(this.updatecampaign),
     
    })

  }

  get f() { return this.editcampaign.controls; }

  onSubmit(){

    var f = this.f;
  //   if (f.startTime.value === '' || f.endTime.value === '') {
  //     // return ('Please set start time and end time.', 'alert-danger');
  //   }
  
  //   if(f.startTime.value || f.endTime.value)
  //     {
  //       if (f.startTime.value.split(':')[0] > f.endTime.value.split(':')[0]) {
  //         // return ('Start time should less than end time.', 'alert-danger');
  //       }
  //       if(parseInt(f.dimp.value) > parseInt(f.timp.value)){
          
  //         return
  //       }
  //       if(parseInt(f.dbudget.value) > parseInt(f.tbudget.value)){
  //         // this.apiService.showFlash('Total Budget should not less than Daily Budget.', 'alert-danger');
  //         return
  //       }
   
  // }
  var data = {
    name: f.name.value,
    currency: f.currency.value,
    // stdate: this.minDate,
    // eddate: this.maxDate,
    tbudget: f.tbudget.value,
    dbudget: f.dbudget.value,
    timp: f.timp.value,
    dimp: f.dimp.value,
    pmpid: f.pmpid.value,
    minbid: f.minbid.value,
    maxbid: f.maxbid.value,
    startTime: f.startTime.value,
    endTime: f.endTime.value,
    timeZone: f.timeZone.value,
    trafficSource:f.trafficSource.value,
    frequency:f.frequency.value,
    optimizeBy:f.optimizeBy.value,
  
  }

  this.api.updatecampaign(data).subscribe(data=>{
console.log(data);
  })
}

}
