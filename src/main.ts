import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// import { CommonModule } from '@angular/common';
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
