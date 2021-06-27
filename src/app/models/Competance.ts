export class Competance {
    public id: string;
    public nom: string;
    public description: string;

    public constructor(id = "", nom = "", description = "") {
        this.id = id;
        this.nom = nom;
        this.description = description;
    }
}