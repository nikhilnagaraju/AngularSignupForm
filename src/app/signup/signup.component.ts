import { Component, OnInit } from "@angular/core";
import {
  SignupHelperService,
  TabIndexMapping,
} from "../services/signup-helper.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.less"],
})
export class SignupComponent implements OnInit {
  formsTabIndex: number;
  combinedInfo: any;

  constructor(
    private _helperService: SignupHelperService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formsTabIndex = 0;
    this.combinedInfo = {};
    this._helperService.getTabSelected().subscribe((tabIndex: number) => {
      this.formsTabIndex = tabIndex;
    });
  }

  getPhoneInfo(info: any) {
    this.combinedInfo = Object.assign({}, this.combinedInfo, info);
    this._helperService.setTabSelected(TabIndexMapping.emailForm);
  }
  getEmailInfo(info: any) {
    this.combinedInfo = Object.assign({}, this.combinedInfo, info);
    this._helperService.setTabSelected(TabIndexMapping.userForm);
  }
  getUserInfo(info: any) {
    this.combinedInfo = Object.assign({}, this.combinedInfo, info);
    this._helperService.setTabSelected(TabIndexMapping.locationForm);
  }
  getLocationInfo(info: any) {
    this.combinedInfo = Object.assign({}, this.combinedInfo, info);
    this.router.navigate(["home"], {
      replaceUrl: true,
      state: { combineddata: this.combinedInfo },
    });
  }
}
