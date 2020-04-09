import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  API_URL = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }
  campaign;
  creat(data) {
    return this.httpClient.post(`${this.API_URL}/register`, data  );
  }

  updatecampaign(data){
    
    return this.httpClient.put(`${this.API_URL}/update${data._id}`, data  );
  }

  getallcampaign(){
    return this.httpClient.get(`${this.API_URL}/get`);
  }

  delete(campaign){
    return this.httpClient.delete(`${this.API_URL}/delete${campaign._id}`,campaign);
  }

  setcampaign(campaign){
    this.campaign= campaign;
  }

  getcampaign() {
    return this.campaign;
}

  getCountryList() {
    return this.httpClient.get(`../assets/json/countries.min.json`  );
  }

  getCurrency() {
    return this.httpClient.get(`../assets/json/currency.json`  );
  }
  getTimezoneList() {
    return this.httpClient.get(`../assets/json/timezones.json`  );
  }
}
