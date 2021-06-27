export class User {
    public id: string;
    public nom: string;
    public prenom: string;
    public etat: string;
    public email: string;
    public password: string;
    public rules: string;

    public constructor(id = "", nom = "", prenom = "", etat = "", email = "", password = "", rules = "") {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.etat = etat;
        this.email = email;
        this.password = password;
        this.rules = rules;
    }
}