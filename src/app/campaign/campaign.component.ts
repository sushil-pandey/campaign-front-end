import { Component, OnInit } from '@angular/core';
import{ApiService} from '../shared/api.service'
import { Router } from "@angular/router";
import * as _ from "lodash";

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {


  campaign: any;
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {

    this.api.getallcampaign().subscribe((data: Array<object>)=>{
      this.campaign= data;
      console.log(this.campaign);
     

    
     

      
  })

}

updaterecord(campaign){
  console.log(campaign);
    this.api.setcampaign(campaign);
     this.router.navigateByUrl('/update');
   
}
delete(campaign){

  this.api.delete(campaign).subscribe((data)=>{

  })

}

replicate(employee){
  let d = _.cloneDeep(employee);
  d.name = d.name + "-Copy-" + new Date().getTime();
  this.api.creat(d).subscribe((response)=>{
    console.log(response);
  })
}
search
searchFilter(search){
this.campaign.filter(item=> {
    let a = item.name.toLowerCase();
    return a.includes(search.target.value.toLowerCase())
  });
}

}
