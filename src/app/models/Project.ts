export class Project {
    public id: string;
    public sujet: string;
    public description: string;
    public chef: string;
    public chercheur: string;
    public dateDebut: string;
    public projetId: string;
    // public archive: boolean;

    public constructor(id = "", sujet = "", description = "", chef = "", chercheur = "", dateDebut = "", projetId = "") {
        this.id = id;
        this.sujet = sujet;
        this.description = description;
        this.chef = chef;
        this.chercheur = chercheur;
        this.dateDebut = dateDebut;
        this.projetId = projetId;
    }
}