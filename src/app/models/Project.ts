export class Project {
    public id: string;
    public sujet: string;
    public description: string;
    public chef: string;
    public prof: string;
    public dateDebut: string;
    public projetId: string;
    public archive: boolean;

    public constructor(id = "", sujet = "", description = "", chef = "", prof = "", dateDebut = "", archive = false, projetId = "") {
        this.id = id;
        this.sujet = sujet;
        this.description = description;
        this.chef = chef;
        this.prof = prof;
        this.dateDebut = dateDebut;
        this.archive = archive;
        this.projetId = projetId;
    }
}