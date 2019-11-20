export class Evento {
    id: number;
    name: string;
    description: string;
    price: number;
    latAddr: number;
    lonAddr: number;
    address: string;
    chef: string;
    idChef: number;
    idState = 1;

    constructor(json: any = null) {
        if (json !== null) {
            this.id = json.id;
            this.name = json.name;
            this.description = json.description;
            this.price = json.price;
            this.latAddr = json.lat_addr;
            this.lonAddr = json.lon_addr;
            this.address = json.address;
            this.idChef = json.id_chef;
            this.chef = json.chef.full_name;
        }
    }

    static clone(row: Evento): Evento {
        const rowCloned = Object.assign({}, row);
        delete rowCloned.chef;
        delete rowCloned.id;
        return rowCloned;
    }
}
