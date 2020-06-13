import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from "@angular/forms";
import { SignupHelperService } from "src/app/services/signup-helper.service";

@Component({
  selector: "app-email-form",
  templateUrl: "./email-form.component.html",
  styleUrls: ["./email-form.component.less"],
})
export class EmailFormComponent implements OnInit {
  @Output() emailInfo = new EventEmitter();
  emailForm: FormGroup;
  requestedEmailOTP: boolean;
  constructor(
    private fb: FormBuilder,
    private helperService: SignupHelperService
  ) {}

  ngOnInit() {
    this.emailForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      emailotp: new FormControl(""),
    });
  }

  sendOTP() {
    this.emailForm.controls["emailotp"].setValidators([
      Validators.required,
      Validators.pattern("[0-9]{6}"),
      Validators.maxLength(6),
      Validators.minLength(6),
    ]);
    this.requestedEmailOTP = true;
  }

  validateEmailForm() {
    this.emailInfo.emit(this.emailForm.value);
  }
}
