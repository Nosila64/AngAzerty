import { Component, OnInit } from '@angular/core';
import {AzertyWatchData} from "../azerty-sign-data";
import {ApiResult} from "../api-result";
import {ApiAzertyService} from "../api-azerty.service";

@Component({
  selector: 'app-azertyliste',
  templateUrl: './azertyliste.component.html',
  styleUrls: ['./azertyliste.component.css']
})
export class AzertylisteComponent implements OnInit {

  watchList: AzertyWatchData[];
  apiResult: ApiResult;
  constructor(private apiService: ApiAzertyService) { }

  ngOnInit() {
    this.apiService.getSignUp().subscribe((result: ApiResult) => {
      console.log(result);
      this.apiResult = {
        message: null,
        results: result.results
      };
      let tabResult = this.apiResult.results;
      for(let i = 0;i < tabResult.length; i++) {
        if(i < 5) {
          tabResult[i]['color'] = "green";
        }
        else if(i >= 5 && i < 10) {
          tabResult[i]['color'] = "yellow";
        }
        else {
          tabResult[i]['color'] = "blue";
        }
      }
      console.log(tabResult);
      this.watchList = this.apiResult.results;
    });
  }

}
