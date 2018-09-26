import { Component, OnInit } from '@angular/core';
import {ApiResult} from "../api-result";
import {ApiAzertyService} from "../api-azerty.service";

@Component({
  selector: 'app-azertystat',
  templateUrl: './azertystat.component.html',
  styleUrls: ['./azertystat.component.css']
})
export class AzertystatComponent implements OnInit {

  apiResult: ApiResult;
  datesList = [];
  playerList = [];

  constructor(private apiService: ApiAzertyService) { }

  ngOnInit() {
    this.apiService.getDates().subscribe((result: ApiResult) => {
      this.apiResult = {
        message: null,
        results: result.results
      };
      console.log(this.apiResult.results);
      this.datesList = this.apiResult.results;
    })
  }

  onChange(value) {
    this.apiService.getPlayerDoneByDate(value).subscribe((result: ApiResult) => {
      this.apiResult = {
        message: null,
        results: result.results
      };
      this.playerList = this.apiResult.results;
    });
  }

}
