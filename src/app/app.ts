import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';
import { About } from './component/about/about';
import { Contactus } from './component/contactus/contactus';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Header,Footer,About,Contactus,FormsModule,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('TravelWebsite');
}
