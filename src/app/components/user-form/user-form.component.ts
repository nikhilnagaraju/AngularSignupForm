import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { SignupHelperService } from "src/app/services/signup-helper.service";
import { UsersData } from "src/app/models/users-data";
import { ApiService } from "src/app/services/api.service";
import { of } from "rxjs";
import { map } from "rxjs/operators";

const usernameAsyncValidator = (api: ApiService) => (control: FormControl) => {
  if (!control || String(control.value).length === 0) {
    return of(null);
  }
  return api.getUsersData().pipe(
    map((ud: UsersData) => {
      return !ud.users.includes(control.value) ? null : { redundantUser: true };
    })
  );
};

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.less"],
})
export class UserFormComponent implements OnInit {
  @Output() userInfo = new EventEmitter();
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public api: ApiService,
    private helperService: SignupHelperService
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group(
      {
        username: new FormControl(
          "",
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(31),
          ],
          [usernameAsyncValidator(this.api)]
        ),
        password: new FormControl("", [
          Validators.required,
          Validators.pattern(/((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,})/),
        ]),
        password1: new FormControl("", [
          Validators.required,
          Validators.pattern(/((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,})/),
        ]),
      },
      { validators: [this.checkPasswords] }
    );
  }

  checkPasswords(group: FormGroup) {
    let base = group.get("password").value;
    let confirmPass = group.get("password1").value;
    return base === confirmPass ? null : { notIdentical: true };
  }

  validateUserForm() {
    this.userInfo.emit(this.userForm.value);
  }
}
