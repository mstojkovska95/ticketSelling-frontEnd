import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardImg1:string = "../assets/img/card-home-img/toto.jpg";
  cardHeader1:string ="Toto";
  cardText1:string = "2019 was a banner year and the 40th Anniversary for TOTO who celebrated the occasion by embarking on their longest world tour in years. The band performed for hundreds of thousands of fans across Europe and one of their last stops was Skopje. This live performance was filmed in front of a sold-out crowd exceeding 2,000 fans in Skopje. TOTO performed a wide range of songs, including hit singles, rarely performed live deep cuts, and two recently recorded tracks which appeared on their new Greatest Hits album. ";
  

  cardImg2:string = "../assets/img/card-home-img/bryan.jpg";
  cardHeader2:string ="Bryan Adams";
  cardText2:string = "Constantly touching base with his fans by making them laugh with his anecdotes, or asking them to sing along, Adams very much made the impression of being an engaged artist, who enjoyed entertaining his audience as much as they enjoyed being entertained. The symbiotic relationship throughout the night creating an atmosphere of pure exultation. Ninety minutes had disappeared in a heartbeat, the fans begging for more. Mr Adams you just unequivocally won Macedonia’s heart. ";
  
  cardImg3:string = "../assets/img/card-home-img/SteveAoki.jpg";
  cardHeader3:string ="Steve Aoki";
  cardText3:string = "An upsurge of energy flowed through Ohrid on Tuesday night with Steve Aoki taking his place on the stage on Ohrid Calling Festival. Aoki made a radiant energy in the crowd during his 2 hour performance and perfectly blended each track together in a seamless performance assuring fans not one beat was missed. Steve Aoki has already managed set the standard high for all DJ’s around the world and we will love to have him back as sonn as possible! ";
  

 
  constructor() { }

  ngOnInit(): void {
    
  }

}
