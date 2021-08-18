import { Component } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-swiper',
  template: `
    <swiper
      [slidesPerView]="1"
      [spaceBetween]="50"
      (swiper)="onSwiper($event)"
      (slideChange)="onSlideChange()"
      [navigation]="true"
      [pagination]="{ clickable: true }"
      [scrollbar]="{ draggable: true }"
      [lazy]="true"
      [effect]="'fade'"
    >
      <ng-template swiperSlide>
        <div>
          <div class="download">
            <a download href="../../assets/Headshots/legits2.jpg"><img class="arrow" src="../../assets/icons/download.png" /></a>
          </div>
          <div class="slide-container">
            <img class="slide-img" src="../../assets/Headshots/legits2.jpg" />
          </div>
        </div>
        <div>
        </div>
      </ng-template>
      <ng-template swiperSlide>
        <div>
           <div class="download">
           <a download href="../../assets/Headshots/longL.jpg"> <img class="arrow" src="../../assets/icons/download.png" /></a>
          </div>
          <div class="slide-container">
            <img class="slide-img" src="../../assets/Headshots/longL.jpg" />
          </div>
        </div>
      </ng-template>
      <ng-template swiperSlide>
        <div>
           <div class="download">
           <a download href="../../assets/Headshots/shortC.jpg">   <img class="arrow" src="../../assets/icons/download.png" /></a>
          </div>
          <div class="slide-container">
            <img class="slide-img" src="../../assets/Headshots/shortC.jpg" />
          </div>
        </div>
      </ng-template>
      <ng-template swiperSlide>
        <div>
           <div class="download">
           <a download href="../../assets/Headshots/legitS.jpg">   
           <img class="arrow" src="../../assets/icons/download.png" /></a>
          </div>
          <div class="slide-container">
            <img class="slide-img" src="../../assets/Headshots/legitS.jpg" />
          </div>
        </div>
      </ng-template>
      <ng-template swiperSlide>
        <div>
           <div class="download">
           <a download href="../../assets/Headshots/longC.jpg">   <img class="arrow" src="../../assets/icons/download.png" /></a>
          </div>
          <div class="slide-container">
            <img class="slide-img" src="../../assets/Headshots/longC.jpg" />
          </div>
        </div>
      </ng-template>
      <ng-template swiperSlide>
        <div>
           <div class="download">
           <a download href="../../assets/Headshots/long2.jpg">   <img class="arrow" src="../../assets/icons/download.png" /></a>
          </div>
          <div class="slide-container">
            <img class="slide-img" src="../../assets/Headshots/longL2.jpg" />
          </div>
        </div>
      </ng-template>
    </swiper>
  `,
  styleUrls: ['./swiper.component.css'],
})
export class SwiperComponent {
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
