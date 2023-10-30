import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

const port = process.env["PORT"] || 4200;

document.addEventListener("DOMContentLoaded", () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(success => console.log(`Application démarrée sur le port ${port}`))
    .catch(err => console.error(err));
});
