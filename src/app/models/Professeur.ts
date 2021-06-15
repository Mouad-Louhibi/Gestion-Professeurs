export class Professeur{
    public nom: string;
    public prenom: string;
    public etat: string;

    public constructor(nom = "", prenom = "", etat = ""){
        this.nom = nom;
        this.prenom = prenom;
        this.etat = etat;
    }
}