import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.css"],
})
export class AnalyticsComponent implements OnInit {
  birthDates = [];
  public chartOptions: any = {
    title: "Birthdate Distribution",
    legend: { position: "none" },
  };
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((users) => {
      users.data.map((user) => this.birthDates.push(user.birthDate));
    });
    this.loadBirthdateData();
  }

  loadBirthdateData() {
    const counts = this.birthDates.reduce((acc, dateString) => {
      const year = dateString.split("-")[0];
      acc[year] = (acc[year] || 0) + 1;
      return acc;
    }, {});

    this.birthDates = Object.entries(counts).map(([dateString, count]) => [
      dateString,
      count,
    ]);
  }

}
