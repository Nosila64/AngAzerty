import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResult} from "./api-result";
import {AzertySignData} from "./azerty-sign-data";

@Injectable({
  providedIn: 'root'
})
export class ApiAzertyService {

  private apiUrl = environment.url;

  constructor(private http: HttpClient) { }

  signUp(dataForm: AzertySignData):Observable<ApiResult> {
    return this.http.post<ApiResult>(this.apiUrl+"/addplayer",dataForm);
  }

  getSignUp(): Observable<ApiResult> {
    return this.http.get<ApiResult>(this.apiUrl+"/player");
  }

  validPassage(score,idplayer): Observable<ApiResult> {
    return this.http.post<ApiResult>(this.apiUrl+"/player",{scoreP:score,idPlayer:idplayer});
  }
  getDates(): Observable<ApiResult> {
    return this.http.get<ApiResult>(this.apiUrl+"/listdates");
  }
  getPlayerDoneByDate(date): Observable<ApiResult> {
    return this.http.get<ApiResult>(this.apiUrl+"/stats/"+date);
  }
}
