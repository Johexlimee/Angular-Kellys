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
    { title: 'Listar curso', link: 'listcourse' },
    { title: 'Quienes somos', link: 'postcourse' },
    { title: 'Direccion', link: 'contact' }
  ];

  isMenuOpen: boolean = false;

  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
