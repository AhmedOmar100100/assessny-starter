import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessny-messages-slider',
  templateUrl: './assessny-messages-slider.component.html',
  styleUrls: ['./assessny-messages-slider.component.css']
})
export class AssessnyMessagesSliderComponent implements OnInit {

  constructor() { }
  slides = [
    // assets/images/board/omar lotfe.jpg
    { img: "https://dummyimage.com/260x220/9DABC2/aaa", title: "1عنوان الرسالة", desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى", linkedinProfile: "https://www.linkedin.com/in/omar-lotfy-001a131b7" },
    { img: "https://dummyimage.com/260x220/9DABC2/aaa", title: "2عنوان الرسالة", desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى", linkedinProfile: "https://www.linkedin.com/in/omar-lotfy-001a131b7" },
    { img: "https://dummyimage.com/260x220/9DABC2/aaa", title: "3عنوان الرسالة", desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى", linkedinProfile: "https://www.linkedin.com/in/omar-lotfy-001a131b7" },
    { img: "https://dummyimage.com/260x220/9DABC2/aaa", title: "4عنوان الرسالة", desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى", linkedinProfile: "https://www.linkedin.com/in/omar-lotfy-001a131b7" },

  ];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1100,
    arrows: false,

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
  ngOnInit(): void {
  }

}
