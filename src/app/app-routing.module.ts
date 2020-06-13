import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: SignupComponent },
  { path: "home", component: HomeComponent },
  { path: "**", component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
