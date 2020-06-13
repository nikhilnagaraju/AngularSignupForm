import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { SignupHelperService } from "src/app/services/signup-helper.service";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-phone-form",
  templateUrl: "./phone-form.component.html",
  styleUrls: ["./phone-form.component.less"],
})
export class PhoneFormComponent implements OnInit {
  @Output() phoneInfo = new EventEmitter();
  phoneForm: FormGroup;
  requestedOTP: boolean;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private helperService: SignupHelperService
  ) {}

  ngOnInit() {
    this.phoneForm = this.fb.group({
      phone: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]{10}"),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      otp: new FormControl(""),
    });
  }

  sendOTP() {
    this.phoneForm.controls["otp"].setValidators([
      Validators.required,
      Validators.pattern("[0-9]{6}"),
      Validators.maxLength(6),
      Validators.minLength(6),
    ]);
    this.requestedOTP = true;
  }

  validatePhoneForm() {
    this.phoneInfo.emit(this.phoneForm.value);
  }
}
