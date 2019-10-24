import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../global/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient:HttpClient ) { }

  public getListUsers(){
    let folderPath = "/user/list";
    return this.httpClient.get(`${AppSettings.API_ENDPOINT}:${AppSettings.API_PORT}/${folderPath}`);
  }
}
