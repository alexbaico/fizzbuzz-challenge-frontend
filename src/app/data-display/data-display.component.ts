import {Component, OnInit} from '@angular/core';
import {FizzbuzzserviceService} from "../fizzbuzzservice.service";

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  data: any;
  min: number=0;
  max: number=0;
  formSubmitted = false;

  constructor(private apiService: FizzbuzzserviceService) { }

  ngOnInit(): void {
  }

  fetchData(): void {
    // Call the API service with the parameters
    this.apiService.fetchData(this.min, this.max).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.data = error.error;
      }
    );
  }

  onSubmit(): void {
    this.formSubmitted = true;

    // Check if the form is valid and the input values are valid integers
    if (!isNaN(this.min) && !isNaN(this.max)) {
      this.fetchData();
    }
  }
}
