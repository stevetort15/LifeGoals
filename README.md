# LifeGoals

Aplicación en **Angular 18 + Firestore** para administrar tus metas en la vida.
Reto del curso *Fundamentos de Front-End con Angular 18* — Steve Tort.

## Funcionalidad
- Colección `metas` en Firestore (campo `meta`, tipo string).
- Lectura en tiempo real, alta y eliminación de metas (componente `home` + `meta-service`).
- Rutas `/home` y `/about` con menú de navegación.
- CI/CD: workflow de GitHub Actions que construye la app y publica la imagen en Docker Hub.

## Ejecutar en local
```bash
npm install
ng serve   # http://localhost:4200
```

## Despliegue
Cada push a `master` dispara el workflow que publica `DOCKER_USER/lifegoals:latest`
en Docker Hub; esa imagen se despliega en producción en https://render.com.
