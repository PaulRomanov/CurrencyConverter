import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

interface ApiRequest {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}


@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  @Output() inputValue = new EventEmitter<string>();
  @Input() num = 0;

  viewChange = '';

  public exchangeRates: any;

  contactForm!: FormGroup;

  public currencies = [
    { id: 1, name: "USD" },
    { id: 2, name: "EUR" },
    { id: 3, name: "UAH" },
  ];

  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.apiService.getConversion().subscribe((data) => {
      this.exchangeRates = data;
      console.log(this.exchangeRates);
    })

    this.contactForm = this.fb.group({
      currencies: [null]
    });
  }

  submit(event: HTMLInputElement) {

    this.inputValue.emit(event.value);

    this.viewChange = event.value;

    this.num = Number(this.viewChange)

    if (this.contactForm.value.currencies == 1) {
      this.num = Math.round(((this.exchangeRates[25].rate) * this.num) * 100) / 100;
    } else if (this.contactForm.value.currencies == 2) {
      this.num = Math.round(((this.exchangeRates[32].rate) * this.num) * 100) / 100;
    } else if (this.contactForm.value.currencies == 3){
      this.viewChange = event.value;
    } else {
      this.num = 0;
    }

    event.value = '';

  }

}
