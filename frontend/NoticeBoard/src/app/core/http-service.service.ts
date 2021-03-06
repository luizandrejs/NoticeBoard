import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = `http://localhost:8080/notice/`;
  private httpOptions:any = {}

  constructor(private httpClient: HttpClient) {
    
  }
  createheaders(){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers = headers.append('Content-Type', 'application/json');
    this.httpOptions = {
      headers: headers,
    }
  }
  post<T>(url: string, data: T) {
    this.createheaders();
    return this.httpClient.post(this.baseUrl + url, data,this.httpOptions);
  }
  get(url: string) {
    this.createheaders();
    return this.httpClient.get(this.baseUrl + url,this.httpOptions);
  };
  patch<T>(url: string, data: T){
    this.createheaders();
    return this.httpClient.patch(this.baseUrl + url ,data,this.httpOptions);
  }
  delete<T>(url: string){
    this.createheaders();
    return this.httpClient.delete(`${this.baseUrl}${url}`,this.httpOptions);
  }
}

