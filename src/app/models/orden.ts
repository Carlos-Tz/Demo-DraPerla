import { Receta } from './receta';
import { Historia } from './historia';
import { Carnet } from './carnet';
import { Expediente } from './expediente';

export interface Orden {
    orden: number;
    nombre: string;
    receta: Receta;
    expediente: Expediente;
    historia: Historia;
    carnet: Carnet;
}
