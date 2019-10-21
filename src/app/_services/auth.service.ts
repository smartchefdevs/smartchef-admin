import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../global/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  /**
   * login
   */
  public test() {   
    return this.httpClient.get(`${AppSettings.API_ENDPOINT}:${AppSettings.API_PORT}`);
  }
  
  public login(mail: String, pass: String){
    let folderPath:String = "auth/login/admin";
    return this.httpClient.post(`${AppSettings.API_ENDPOINT}:${AppSettings.API_PORT}/${folderPath}`, {
        mail,
        pass
    })
  }


}
