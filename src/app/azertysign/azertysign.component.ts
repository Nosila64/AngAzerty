import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AzertySignData} from "../azerty-sign-data";
import {ApiAzertyService} from "../api-azerty.service";
import {ApiResult} from "../api-result";

@Component({
  selector: 'app-azertysign',
  templateUrl: './azertysign.component.html',
  styleUrls: ['./azertysign.component.css']
})
export class AzertysignComponent implements OnInit {

  signForm: FormGroup;
  message: string;
  apiResult: ApiResult;
  constructor(private fb: FormBuilder, private apiService: ApiAzertyService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signForm = this.fb.group(
      {
        lnameP: ['', Validators.required],
        fnameP: ['', Validators.required],
        mailP: [''],
        lvlP: ['',Validators.required]
      }
    )
  }

  onSubmit(form) {
    let azertySign = new AzertySignData();
    azertySign.lnameP = form.value.lnameP;
    azertySign.fnameP = form.value.fnameP;
    azertySign.mailP = form.value.mailP;
    azertySign.lvlP = form.value.lvlP;
    azertySign.hSignUPP = new Date().toLocaleString();
    this.apiService.signUp(azertySign).subscribe((result: ApiResult) => {
      this.apiResult = {
        message: result.message,
        rows: null
      };
      this.message = "Inscription Validée";
      this.signForm.reset({lvlP: ''});
    });
  }

  deleteMessage() {
    this.message = null;
  }

}
