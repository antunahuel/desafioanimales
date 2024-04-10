import Tipo from "./Tipo.js";

export default class Datosmascota extends Tipo {
    constructor(tipo,nombreM,consulta){
        super(tipo);
        this._nombreM = nombreM;
        this._consulta = consulta;
    }

    get nombreM(){
        return this._nombreM;
    }

    get consulta(){
        return this._consulta;
    }

    set nombreM(nuevo_nombre){
        this.nombreM = nuevo_nombre;
    }

    datos(){
        return `El tipo de Mascota es: ${this.tipo}, su nombre es: ${this.nombreM}, y su consulta es por: ${this.consulta}`;
    }
};




