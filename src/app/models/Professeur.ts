export class Professeur{
    public id: number;
    public nom: string;
    public prenom: string;
    public etat: string;

    public constructor(id = 0, nom = "", prenom = "", etat = ""){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.etat = etat;
    }
}