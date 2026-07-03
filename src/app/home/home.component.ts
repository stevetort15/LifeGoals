// Componente Home: consulta, alta y eliminación de metas usando el servicio
// Reto LifeGoals - Steve Tort
import { Component, OnInit } from '@angular/core';
import { Meta } from '../models/meta.model';
import { MetaServiceService } from '../services/meta-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  metas: Meta[] = [];        // lista de metas leída de Firestore
  nuevaMeta: string = '';    // campo del formulario ([(ngModel)])

  // Inyección del servicio por constructor
  constructor(private metaService: MetaServiceService) { }

  // Al iniciar, se suscribe a la colección (lectura en tiempo real)
  ngOnInit(): void {
    this.metaService.getMetas().subscribe(datos => {
      this.metas = datos;
    });
  }

  // Alta de una meta nueva
  agregarMeta(): void {
    if (this.nuevaMeta.trim() === '') {
      return;                 // no se agregan metas vacías
    }
    const meta: Meta = { meta: this.nuevaMeta.trim() };
    this.metaService.addMeta(meta).then(() => {
      this.nuevaMeta = '';    // limpia el formulario
    });
  }

  // Eliminación de una meta por id
  eliminarMeta(id?: string): void {
    if (id) {
      this.metaService.deleteMeta(id);
    }
  }
}
