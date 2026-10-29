import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@presentation/components/header/header';
import { Sidebar } from '@presentation/components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
