import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public banks: any =[];
  public oldBanks: any = [];
  public cities = [
  "Mumbai", "Bengaluru", "Kolkata", "Chennai", "Delhi"
  ]
  public selectedCity = "Mumbai";
  
  
  constructor(private httpClient: HttpClient){
  
  }
  
  ngOnInit(){
  this.getBanks(this.selectedCity);
  }
  
  public getBanks(city){
  let url = "https://vast-shore-74260.herokuapp.com/banks?city=" + city.toUpperCase();
    return this.httpClient.get(url).subscribe(data=>{
    this.banks = data;
    this.oldBanks = this.banks.slice();
    })
}

filterBanks(value){
this.banks = this.oldBanks.slice();
if(value){
    this.banks = this.banks.filter(bank=>{
        if(JSON.stringify(bank).toUpperCase().indexOf(value.toUpperCase()) > -1){
        return true;
        }
    })
    console.log(this.banks)
}else{
this.banks = this.oldBanks.slice();
}
}
}

