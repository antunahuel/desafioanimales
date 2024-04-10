export default class Propietario {
    constructor (nombre,direccion,telefono,mascotas=[]){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.mascotas = mascotas;
    }
 
    agregarMascota(mascota){
        this.mascotas.push(mascota);
        return this.mascotas;
    }

    datosPropietario(){
        return `El nombre del propietario es: ${this.nombre} su dirección es: ${this.direccion}, teléfono: ${this.telefono} datos Mascota ${this.mascotas}`
    }
};