export class PersonasViewModel {
    public id : number
    public nombreCompleto : string
    public empleo : EmpleoViewModel
    public contactos : ContactoViewModel[]
}

export class EmpleoViewModel {
    public id : number
    public cargo : string
}


export class ContactoViewModel {
    public nombre : string
    public telefono : string
}