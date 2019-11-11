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

  public createUser(objectSend: any){
    let folderPath = "/user/create";
    return this.httpClient.post(`${AppSettings.API_ENDPOINT}:${AppSettings.API_PORT}/${folderPath}`, objectSend);
  }

  public deleteUser(objectSend: any){
    let folderPath = "/user/change/state";
    return this.httpClient.post(`${AppSettings.API_ENDPOINT}:${AppSettings.API_PORT}/${folderPath}`, objectSend);
  }

  public editUser(objectSend: any){
    let folderPath = "/user/update";
    return this.httpClient.post(`${AppSettings.API_ENDPOINT}:${AppSettings.API_PORT}/${folderPath}`, objectSend);
  }
  
}
