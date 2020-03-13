import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Orden } from '../models/orden';
import { Receta } from '../models/receta';
import { Carnet } from '../models/carnet';
import { Historia } from '../models/historia';
import { Expediente } from '../models/expediente';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  formsList: AngularFireList<any>;
  formObject: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  AddForm(form: any) {
    const nOrden = {
      nombre: form.nombre,
      orden: form.orden,
      receta: {
        nombre: form.nombre,
        folio: form.orden
      },
      expediente: {
        nombre: form.nombre,
        folio: form.orden
      },
      carnet: {
        nombre: form.nombre,
        folio: form.orden
      },
      historia: {
        nombre: form.nombre,
        folio: form.orden
      }
    };
    this.formsList.push(nOrden as Orden);
  }

  GetFormsList() {
    this.formsList = this.db.list('draperla/orden-list');
    return this.formsList;
  }

  GetForm(key: string) {
    this.formObject = this.db.object('draperla/orden-list/' + key);
    return this.formObject;
  }

  UpdateForm(f: Orden, key: string) {
    this.db.object('draperla/orden-list/' + key).update(f);
  }
  UpdateReceta(f: Receta, key: string) {
    this.db.object('draperla/orden-list/' + key + '/receta').update(f);
    this.db.object('draperla/orden-list/' + key).update({nombre: f.nombre, orden: f.folio});
  }
  UpdateCarnet(f: Carnet, key: string) {
    this.db.object('draperla/orden-list/' + key + '/carnet').update(f);
    this.db.object('draperla/orden-list/' + key).update({nombre: f.nombre, orden: f.folio});
  }
  UpdateHistoria(f: Historia, key: string) {
    this.db.object('draperla/orden-list/' + key + '/historia').update(f);
    this.db.object('draperla/orden-list/' + key).update({nombre: f.nombre, orden: f.folio});
  }
  UpdateExpediente(f: Expediente, key: string) {
    this.db.object('draperla/orden-list/' + key + '/expediente').update(f);
    this.db.object('draperla/orden-list/' + key).update({nombre: f.nombre, orden: f.folio});
  }

  DeleteForm(key: string) {
    this.formObject = this.db.object('draperla/orden-list/' + key);
    this.formObject.remove();
  }
}
