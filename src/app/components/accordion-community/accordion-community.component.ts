import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-community',
  templateUrl: './accordion-community.component.html',
  styleUrls: ['./accordion-community.component.css']
})
export class AccordionCommunityComponent implements OnInit {
  slides = [
    { img: 'assets/images/seasons/season1/1.jpeg' },
    { img: 'assets/images/seasons/season1/2.jpeg' },
    { img: 'assets/images/seasons/season1/3.jpeg' },
    { img: 'assets/images/seasons/season1/4.jpeg' },
    { img: 'assets/images/seasons/season1/5.jpeg' },
    { img: 'assets/images/seasons/season1/6.jpeg' },
    { img: 'assets/images/seasons/season1/7.jpeg' },
    { img: 'assets/images/seasons/season1/8.jpeg' },
    { img: 'assets/images/seasons/season1/9.jpeg' },
    { img: 'assets/images/seasons/season1/10.jpeg' },
    { img: 'assets/images/seasons/season1/11.jpeg' },
    { img: 'assets/images/seasons/season1/12.jpeg' },
    { img: 'assets/images/seasons/season1/13.jpeg' },
    { img: 'assets/images/seasons/season1/14.jpeg' },
    { img: 'assets/images/seasons/season1/15.jpeg' },
    { img: 'assets/images/seasons/season1/16.jpeg' },
    { img: 'assets/images/seasons/season1/17.jpeg' },
    { img: 'assets/images/seasons/season1/18.jpeg' },
    { img: 'assets/images/seasons/season1/19.jpeg' },
    { img: 'assets/images/seasons/season1/20.jpeg' },
    { img: 'assets/images/seasons/season1/21.jpeg' },
    { img: 'assets/images/seasons/season1/22.jpeg' },
    { img: 'assets/images/seasons/season1/23.jpeg' },
    { img: 'assets/images/seasons/season1/24.jpeg' },
    { img: 'assets/images/seasons/season1/25.jpeg' },
    { img: 'assets/images/seasons/season1/26.jpeg' },
    { img: 'assets/images/seasons/season1/27.jpeg' },
    { img: 'assets/images/seasons/season1/28.jpeg' },
    { img: 'assets/images/seasons/season1/29.jpeg' },
    { img: 'assets/images/seasons/season1/30.jpeg' },
    { img: 'assets/images/seasons/season1/31.jpeg' },




  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 3,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,


  };
  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
