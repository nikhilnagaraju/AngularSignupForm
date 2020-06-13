import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-location-form",
  templateUrl: "./location-form.component.html",
  styleUrls: ["./location-form.component.less"],
})
export class LocationFormComponent implements OnInit {
  @Output() locationInfo = new EventEmitter();
  geolocationPosition: Position;
  constructor() {}

  ngOnInit() {}

  getGeoLocation() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          this.geolocationPosition = position;
          const { latitude, longitude } = this.geolocationPosition.coords;
          this.locationInfo.emit({ latitude, longitude });
        },
        (err) => {
          alert("Location is required, Please Grant Permission");
        }
      );
    }
  }
}
