export class Game{
    _id: String
    name: String;
    description: String;
    price: number;
    img_url: String;

    constructor(_id: String, name: String, description: String, price: number, img_url: String = "assets/img/placeholder.png"){
        this._id = _id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.img_url = img_url;
    }
}
