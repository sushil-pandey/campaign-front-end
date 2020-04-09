import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import{ ApiService } from '../shared/api.service'
// import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  CreateCampaignFrom: FormGroup;
  country:any;
 
  timezonelist:[];

  constructor(public api: ApiService,) { }

  ngOnInit(): void {
   
    this.api.getTimezoneList().subscribe((data:any)=>{
this.timezonelist=data;
    })

    this.CreateCampaignFrom = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      // minDate: new FormControl(''),
      // maxDate: new FormControl(''),
      campDate: new FormControl(['', '']),
      currency: new FormControl('', Validators.required),
      tbudget: new FormControl('', Validators.required),
      dbudget: new FormControl(''),
      timp: new FormControl(''),
      dimp: new FormControl(''),
      pmpid: new FormControl(''),
      minbid: new FormControl('',),
      maxbid: new FormControl('',),
      startTime: new FormControl('00:00'),
      endTime: new FormControl('23:59'),
      timeZone: new FormControl('', Validators.required),
      trafficSource: new FormControl('Desktop', Validators.required),
      frequency: new FormControl(''),
      optimizeBy: new FormControl('ALL'),
     
    })
}

get f() { return this.CreateCampaignFrom.controls; }

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
this.api.creat(data).subscribe(res=>{
  console.log(res);
})
}
}
