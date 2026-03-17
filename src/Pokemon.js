export class Pokemon {
    constructor(data) {
        this.name = data.name;
        this.url = data.url;
        this.id = data.url.split("/").slice(-2, -1)[0];
        this.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
    }
}
