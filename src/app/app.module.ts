import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
} from "@angular/material";
import { MatTabsModule } from "@angular/material/tabs";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SignupComponent } from "./signup/signup.component";
import { PhoneFormComponent } from "./components/phone-form/phone-form.component";
import { EmailFormComponent } from "./components/email-form/email-form.component";
import { UserFormComponent } from "./components/user-form/user-form.component";
import { LocationFormComponent } from "./components/location-form/location-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';

const thirdPartyModules = [
  FlexLayoutModule,
  MatTabsModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    PhoneFormComponent,
    EmailFormComponent,
    UserFormComponent,
    LocationFormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    thirdPartyModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
