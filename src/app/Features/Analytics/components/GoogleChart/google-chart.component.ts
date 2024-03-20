import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})
export class GoogleChartComponent implements OnInit {
  @Input() data
  @Input() type
  @Input() options

  constructor() { }

  ngOnInit() {
  }

}
