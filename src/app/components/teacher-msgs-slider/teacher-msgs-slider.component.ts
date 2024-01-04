import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-msgs-slider',
  templateUrl: './teacher-msgs-slider.component.html',
  styleUrls: ['./teacher-msgs-slider.component.css']
})
export class TeacherMsgsSliderComponent implements OnInit {

  constructor() { }
  slides = [
    { img: "assets/images/board/omar lotfe.jpg", feed: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.", name: "Omar Lotfi" },
    { img: "assets/images/board/asmaasamy.jpeg", feed: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.", name: "Asmaa" },
    { img: "assets/images/board/ahmed omar.jpg", feed: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.", name: "Ahmed Omar" },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1100,
    dots: true,

    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1,
    //       speed: 500,
    //       fade: true,
    //       cssEase: 'linear',
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1,
    //       speed: 400,
    //       fade: true,
    //       cssEase: 'linear',
    //     }
    //   }
    // ]
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
  ngOnInit(): void {
  }

}
