import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-board-slider',
  templateUrl: './board-slider.component.html',
  styleUrls: ['./board-slider.component.css']
})
export class BoardSliderComponent implements OnInit {
  slides = [
    { img: "assets/images/board/omar lotfe.jpg", title: "Omar lotfy", position: "President", linkedinProfile: "https://www.linkedin.com/in/omar-lotfy-001a131b7" },
    { img: "assets/images/board/asmaasamy.jpeg", title: "Asmaa Samy", position: "Vice president", linkedinProfile: "https://www.linkedin.com/in/asmaa-samy-506a27203" },
    { img: "assets/images/board/ahmed omar.jpg", title: "Ahmed Omar", position: "Head of Programming", linkedinProfile: "https://www.linkedin.com/in/a7medtechnology/" },
    { img: "assets/images/board/Yousra ashraf.jpeg", title: "Youssra Ashraf Sedawi", position: "Head pr", linkedinProfile: "https://www.linkedin.com/in/youssra-ashraf-140933236" },
    { img: "assets/images/board/Mostafa Elsawy .jpeg", title: "Mostafa Elsawy", position: "Head of marketing", linkedinProfile: "https://www.linkedin.com/in/mostafa-elsawy-2926a01a4" },
    { img: "assets/images/board/1655471793708.png", title: "Asmaa Hamdy Abd Allah", position: "Head OC", linkedinProfile: "https://www.linkedin.com/in/asma-hamdi-236785223" },
    { img: "assets/images/board/mohamed ahmed.png", title: "Mohamed Ahmed", position: "Head business", linkedinProfile: "https://www.linkedin.com/in/mohamed-ahmed-rammadan-60154919a" },
    { img: "assets/images/board/Eslam Ezzat.jpeg", title: "Eslam Ezzat", position: "Head Media", linkedinProfile: "https://www.linkedin.com/in/esllamofficial/" },
    { img: "assets/images/board/mohamed shaban HR.jpeg", title: "Mohamed Shaaban", position: "Head HR", linkedinProfile: "https://linkedin.com/in/m22shaaban" },
    { img: "assets/images/board/Eslam Mostafa .png", title: "Eslam Mostafa", position: "Vice head marketing", linkedinProfile: "https://www.linkedin.com/in/eslam-mostafa-3a3a05215" },
    { img: "assets/images/board/Abdalla Mostafa Mohamed.jpeg", title: "Abdalla Mostafa Mohamed", position: "Vice OC", linkedinProfile: "https://www.linkedin.com/in/abdallh-mostafa-508b42227" },
    { img: "assets/images/board/Mohamed Ramadan.jpeg", title: "Mohamed Ramadan", position: "Vice Graphic", linkedinProfile: "#" },
    { img: "assets/images/board/Abdelrhman Essam .jpg", title: "Abdelrhman Essam", position: "Vice Graphic", linkedinProfile: "https://www.linkedin.com/in/abdelrhmanessam74" },
    { img: "assets/images/board/dalia khaled.png", title: "Dalia khaled", position: "Vice HR", linkedinProfile: "https://www.linkedin.com/in/dalia-khaled-85211b240" },
    { img: "assets/images/board/esraa mohammed.png", title: "Esraa Mohamed", position: "Vice HR", linkedinProfile: "https://www.linkedin.com/in/esraa-mohamed-saad-78552b216" },
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1400,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          speed: 500,
          fade: true,
          cssEase: 'linear',
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          speed: 400,
          fade: true,
          cssEase: 'linear',
        }
      }
    ]
  };

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
