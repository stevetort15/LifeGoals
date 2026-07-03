// Modelo con la misma estructura que los documentos de la colección "metas"
export class Meta {
  id?: string;      // id del documento en Firestore (para poder eliminarlo)
  meta?: string;    // único campo de texto: la meta de vida
}
