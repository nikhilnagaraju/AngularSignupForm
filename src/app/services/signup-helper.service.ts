import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ValidatorFn, AbstractControl } from "@angular/forms";
import { ApiService } from "./api.service";
import { UsersData } from "../models/users-data";

@Injectable({
  providedIn: "root",
})
export class SignupHelperService {
  tabIndexSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(private api: ApiService) {}

  setTabSelected(tabIndex: number) {
    this.tabIndexSubject.next(tabIndex);
  }

  getTabSelected() {
    return this.tabIndexSubject.asObservable();
  }

  validateUsername(username) {
    return (control: AbstractControl): { [key: string]: any } => {
      return this.api.getUsersData().subscribe(
        (data) => {
          let res = data as UsersData;
          if (res.users.includes(username)) {
            return { redundantUser: true };
          } else {
            return null;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    };
  }
}

export const TabIndexMapping = {
  phoneForm: 0,
  emailForm: 1,
  userForm: 2,
  locationForm: 3,
};
