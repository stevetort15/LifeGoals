// Servicio de acceso a la colección "metas" de Firestore (lectura, alta y eliminación)
// Reto LifeGoals - Steve Tort
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Meta } from '../models/meta.model';

@Injectable({
  providedIn: 'root'
})
export class MetaServiceService {
  // Nombre de la colección en Firestore
  private nombreColeccion = 'metas';
  private metasRef: AngularFirestoreCollection<Meta>;

  // Inyección de Firestore por constructor
  constructor(private db: AngularFirestore) {
    this.metasRef = db.collection(this.nombreColeccion);
  }

  // Lectura: regresa la colección con el id de cada documento (operador map)
  getMetas(): Observable<Meta[]> {
    return this.metasRef.snapshotChanges().pipe(
      map(cambios =>
        cambios.map(c => ({
          id: c.payload.doc.id,
          ...c.payload.doc.data()
        }))
      )
    );
  }

  // Alta: agrega un documento nuevo a la colección
  addMeta(meta: Meta): Promise<any> {
    return this.metasRef.add({ meta: meta.meta });
  }

  // Eliminación: borra el documento por su id
  deleteMeta(id: string): Promise<void> {
    return this.metasRef.doc(id).delete();
  }
}
