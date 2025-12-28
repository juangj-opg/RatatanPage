import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout2',
  templateUrl: './layout2.component.html',
  styleUrl: './layout2.component.css',
})
export class Layout2Component implements OnInit {
  esBestiario: boolean = false;
  esFormacion: boolean = false;

  titleText: string = '';
  imgHUD: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.firstChild?.url.subscribe((url) => {
      const path = url[0]?.path;

      if (path === 'formacion') {
        this.esFormacion = true;
        this.titleText = 'FORMACION';
        this.imgHUD='/images/background/hudEsquina2.png'
      } else if (path === 'bestiario') {
        this.esBestiario = true;
        this.titleText = 'BESTIARIO';
        this.imgHUD='/images/background/hudEsquina.png'
      }
    });
  }

  backPage() {
    console.log('TODO: Pendiente de hacer');
  }
}
