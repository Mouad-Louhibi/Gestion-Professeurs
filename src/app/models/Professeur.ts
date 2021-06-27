export class Professeur {
    public id: string;
    public nom: string;
    public prenom: string;
    public etat: string;
    public profId: string;

    public constructor(id = "", nom = "", prenom = "", etat = "", profId = "") {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.etat = etat;
        this.profId = profId;
    }
}