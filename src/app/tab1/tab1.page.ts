import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  myPictures;

  slideOptions = {
    initialSlide: 0,
    speed: 600,
    loop: true,
  };

  constructor(private router: Router) { }

  goToBookTicketPage() {
    this.router.navigateByUrl('/bookticket');
  }

  ngOnInit() {
    this.myPictures = [
      { "image": "./assets/img/img1.jpg", "name": "backimg1" },
      { "image": "./assets/img/img2.jpg", "name": "backimg2" },
      { "image": "./assets/img/img3.jpg", "name": "backimg3" },
      { "image": "./assets/img/img4.jpg", "name": "backimg4" },
      { "image": "./assets/img/img5.jpg", "name": "backimg5" },
      { "image": "./assets/img/img6.jpg", "name": "backimg6" },
      { "image": "./assets/img/img7.jpg", "name": "backimg7" }
    ];

    //this.sliderOptions= {
    //autoplay: {delay:2000}};
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  

}
