import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"



@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getConversion() {
    return this.httpClient.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  }

}


