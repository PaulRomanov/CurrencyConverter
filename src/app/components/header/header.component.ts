import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

interface ApiRequest {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public articles: any

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getConversion().subscribe((data) => {
      this.articles = data;
      console.log(this.articles);
    })
  }

}
