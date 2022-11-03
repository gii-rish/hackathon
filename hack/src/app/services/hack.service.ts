import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HackService {

  packageName = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  updatedPackage(pName: string) {
    this.packageName.emit(pName);
  }

  getPackage(name: string) {
    return this.http.get<any>(`/api/${name}`);
  }

    getSinglePackage(name: string, _id: number) {
    return this.http.get<any>(`/api/${name}/${_id}`);
  }
}
