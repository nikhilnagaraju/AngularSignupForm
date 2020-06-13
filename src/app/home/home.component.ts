import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"],
})
export class HomeComponent implements OnInit {
  resolvedData: any;
  constructor(private router: Router) {}

  ngOnInit() {
    if (!window.history.state.combineddata) {
      this.router.navigate([""]);
    }
    this.resolvedData = window.history.state.combineddata;
  }
}
