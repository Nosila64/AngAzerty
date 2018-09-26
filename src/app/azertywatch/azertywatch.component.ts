import {Component, OnInit, Input} from '@angular/core';
import {AzertyWatchData} from "../azerty-sign-data";
import {ApiAzertyService} from "../api-azerty.service";
import {ApiResult} from "../api-result";

@Component({
  selector: 'app-azertywatch',
  templateUrl: './azertywatch.component.html',
  styleUrls: ['./azertywatch.component.css']
})
export class AzertywatchComponent implements OnInit {

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
      this.watchList = this.apiResult.results;
    });
  }

  validPassage(score,idplayer) {
    if(score.value == "") {
      alert("Veuillez remplir le score d'abord !");
    }
    else {
      this.apiService.validPassage(score.value,idplayer.value).subscribe((result: ApiResult) => {
        this.apiResult = {
          message: result.message,
          results: null
        };
        this.apiService.getSignUp().subscribe((result: ApiResult) => {
          this.apiResult = {
            message: null,
            results: result.results
          };
          this.watchList = this.apiResult.results;
        });
        }
      );
    }
  }

}
