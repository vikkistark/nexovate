import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
  providedIn: 'root',
})

export class ApiService{
    constructor(public http:HttpClient){

    }

    getItems(){
        return this.http.get('http://localhost:8080/itemavailability');
    }
}
