export class Professeur {
    public id: string;
    public nom: string;
    public prenom: string;
    public etat: string;
    public email: string;
    public rules: string;

    public constructor(id = "", nom = "", prenom = "", etat = "", email = "", rules = "") {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.etat = etat;
        this.email = email;
        this.rules = rules;
    }
}