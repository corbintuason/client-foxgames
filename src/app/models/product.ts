export class Product {
    id: number;
    name: String;
    description: String;
    price: number;
    img_url: String;

    constructor(id: number, name: String, description: String, price: number, img_url: String = "assets/img/placeholder.png"){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.img_url = img_url;
    }
}
