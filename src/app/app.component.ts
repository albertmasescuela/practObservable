import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'title';

  statesComplex2: any[] = [
    {
      id: 12,
      date: '2018-10-24T21:25:21+0000',
      title: 'Ciclistas de pelo en pecho',
      slug: 'ciclos-de-vida-en-angular-la-guia-definitiva',
      path: '2018/10/ciclos-de-vida-en-angular-la-guia-definitiva.html',
      link:
        'https://blog.enriqueoriol.com/2018/10/ciclos-de-vida-en-angular-la-guia-definitiva.html',
      featured_media_src:
        'https://blog.enriqueoriol.com/wp-content/uploads/2018/01/AngularLogo-768x432.jpg'
    },
    {
      id: 13,
      date: '2018-10-24T21:25:21+0000',
      title: 'Trabajadores del metro',
      slug: 'ciclos-de-vida-en-angular-la-guia-definitiva',
      path: '2018/10/ciclos-de-vida-en-angular-la-guia-definitiva.html',
      link:
        'https://blog.enriqueoriol.com/2018/10/ciclos-de-vida-en-angular-la-guia-definitiva.html',
      featured_media_src:
        'https://blog.enriqueoriol.com/wp-content/uploads/2018/01/AngularLogo-768x432.jpg'
    },
    {
      id: 14,
      date: '2018-10-24T21:25:21+0000',
      title: 'CCOO y UGT tienen delito por la falta',
      slug: 'ciclos-de-vida-en-angular-la-guia-definitiva',
      path: '2018/10/ciclos-de-vida-en-angular-la-guia-definitiva.html',
      link:
        'https://blog.enriqueoriol.com/2018/10/ciclos-de-vida-en-angular-la-guia-definitiva.html',
      featured_media_src:
        'https://blog.enriqueoriol.com/wp-content/uploads/2018/01/AngularLogo-768x432.jpg'
    }
  ];
}
