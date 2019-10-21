export class StorageHelper {
    constructor(){

    }

    public setItem(key:string, value:string){

        if(key == null || value == null){
            console.warn("Los valores no pueden ser vacíos o nulos.");
            return;
        }
        
        localStorage.setItem(key,value);
    }

    public setItems(json:string){
        //TODO
    }

    
}