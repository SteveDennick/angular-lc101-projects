import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Awkward band photos';
  image1 = 'https://static.boredpanda.com/blog/wp-content/uploads/2017/03/funny-awkward-metal-bands-photos-3-58cb9b219cb75__605.jpg';
  image2 = 'https://static.boredpanda.com/blog/wp-content/uploads/2017/03/funny-awkward-metal-bands-photos-51-58cbb17161be6__605.jpg';
  image3 = 'https://static.boredpanda.com/blog/wp-content/uploads/2019/02/awkward-metal-band-photos-25-5c54698870239__605.jpg';

  constructor() { }

  ngOnInit() {
  }

}