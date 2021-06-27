export class Project{
    public id:string;
    public sujet: string;
    public description: string;
    public chef: string;
    public dateDebut: string;
    public dateEsFin: string;
    public projetId:string;

    public constructor(id="", sujet ="", description ="", chef ="", dateDebut ="", dateEsFin ="", projetId="") {
        this.id = id;
        this.sujet = sujet;
        this.description = description;
        this.chef = chef;
        this.dateDebut = dateDebut;
        this.dateEsFin = dateEsFin;
        this.projetId = projetId;
    }
}