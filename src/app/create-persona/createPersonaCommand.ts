
export class createPersonaCommand {
    public nombre: string;
    public apellido: string;
    public cedula: string;
    public direccion: string;
    public empleoId: number;
    public contactos: any;

    constructor() {
        this.nombre = '';
        this.apellido = '';
        this.cedula = '';
        this.direccion = '';
    }
}