import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../global/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  public getListCategories(){
    let folderPath = "/categoryfood/list";
    return this.httpClient.get(`${AppSettings.API_ENDPOINT}:${AppSettings.API_PORT}/${folderPath}`)
  }

  public createCategory(name:string){
    let folderPath = "/categoryfood/create";
    return this.httpClient.post(`${AppSettings.API_ENDPOINT}:${AppSettings.API_PORT}/${folderPath}`,
    {
        name
    });
  }

  public deleteCategory(id:number){
    let folderPath = `categoryfood/delete/${id}`;
    return this.httpClient.get(`${AppSettings.API_ENDPOINT}:${AppSettings.API_PORT}/${folderPath}`);
  }

  public editCategory(id:number, name:string){
    console.log(id + " - " + name )
    let folderPath = "categoryfood/update";
    return this.httpClient.post(`${AppSettings.API_ENDPOINT}:${AppSettings.API_PORT}/${folderPath}`,{
      id,name
    });

  }
}
