import { Component } from '@angular/core';

interface NavbarItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-cheader',
  templateUrl: './cheader.component.html',
  styleUrl: './cheader.component.css'
})



export class CheaderComponent {

  navbarItems: NavbarItem[] = [
    { title: 'Lista', link: 'listcourse' },
    { title: 'Contador', link: 'contador' },
    { title: 'Directivas', link: 'nota' }
  ];

  isMenuOpen: boolean = false;

  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
