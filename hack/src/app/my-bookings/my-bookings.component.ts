import { Component, OnInit, TemplateRef } from '@angular/core';
import { HackService } from '../services/hack.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {

  color = 'red';
  color1 = 'red';
  color2 = 'red';
  packageInfo: any;
  starRating = 0;
  modalRef?: BsModalRef;
  wishlistedInfo: any = [];

  wishlistedItems: any = [
        {
            "id": 1,
            "name": "Athens and Santorinii Vacation Packages",
            "stay": "Athens (3N) > Santorini (3N)",
            "offerings": [
                "leisure",
                "Attraction"
            ],
            "activities": [
                "Visit Plaka - oldest sections of Athens",
                "Acropolis museum",
                "Greek Wine and Tapas Tasting Experience in Athens",
                "Visit Black Beach"
            ],
            "inclusions": [
                {"act": "Hotel", "status": "check"},
                {"act": "8 activities", "status": "check"},
                {"act": "Flights", "status": "check"},
                {"act": "Transfers", "status": "check"}
            ],
            "price": "98,468",
            "image": "santorini.png"
        },
        {
            "id": 2,
            "name": "A Fascinating Maldives Tour Package to Cocogiri Island Resort",
            "stay": "",
            "offerings": [
                "Leisure"
            ],
            "activities": [
                "Dine in the luxury of your private infinity pool with your loved one",
                "Relax and rejuvenate in the unspoilt beaches of the Indian Ocean"
            ],
            "inclusions": [
                {"act": "Hotel", "status": "check"},
                {"act": "2 activities", "status": "check"},
                {"act": "Transfers", "status": "check"},
                {"act": "Flights", "status": "x"}
            ],
            "price": "82,117",
            "image": "maledives2.png"
        },
        {
            "id": 3,
            "name": "Rejuvenating Six Nights Greece Packages",
            "stay": "Athens (3N) > Mykonos (3N)",
            "offerings": [
                "leisure",
                "Attraction",
                "Adventure"
            ],
            "activities": [
                "Visit Plaka - oldest sections of Athens",
                "Visit Syntagma Square",
                "Visit Museum of Prehistoric Thera",
                "Visit Santorini Arts Factory",
                "Visit Black Beach",
                "Panathenaic Stadium"
            ],
            "inclusions": [
                {"act": "Hotel", "status": "check"},
                {"act": "8 activities", "status": "check"},
                {"act": "Flights", "status": "x"},
                {"act": "Transfers", "status": "check"}
            ],
            "price": "1,21,468",
            "image": "greece_3.png"
        },
        {
        "id": 4,
        "name": "Magical 6 Nights Europe Tour Packages",
        "stay": "Vienna (3N) > Budapest (3N)",
        "offerings": [
            "Leisure",
            "Attraction"
        ],
        "activities": [
            "Margaret island",
            "Hosok tere (The Heroes' Square)",
            "Budapest Sightseeing Danube River Cruise ticket"
        ],
        "inclusions": [
            {"act": "Hotel", "status": "check"},
            {"act": "3 activities", "status": "check"},
            {"act": "Transfers", "status": "check"},
            {"act": "Flights", "status": "x"}
        ],
        "price": "48,500",
        "image": "europe1.png"
      },
      {
        "id": 5,
        "name": "Perfect 10 Nights Europe Trip Packages",
        "stay": "Lisbon (6N) > Porto (4N)",
        "offerings": [
            "Adventure",
            "Attraction"
        ],
        "activities": [
            "Modern Lisbon Hop-On Hop-Off Bus Tour",
            "Jeronimos Monastery",
            "Afternoon Waterfront Tour with Locals"
        ],
        "inclusions": [
            {"act": "Hotel", "status": "check"},
            {"act": "3 activities", "status": "check"},
            {"act": "Transfers", "status": "check"},
            {"act": "Flights", "status": "x"}
        ],
        "price": "66,262",
        "image": "europe2.png"
      },
      {
        "id": 6,
        "name": "Scenic 10 Nights Europe Tour Package from India",
        "stay": "Paris (5N) > Interlaken (5N)",
        "offerings": [
            "Kid_friendly",
            "Attraction"
        ],
        "activities": [
            "REX STUDIOS",
            "Paris Walking Tour for Children and Families",
            "Explore Montmartre"
        ],
        "inclusions": [
            {"act": "Hotel", "status": "check"},
            {"act": "3 activities", "status": "check"},
            {"act": "Transfers", "status": "check"},
            {"act": "Flights", "status": "x"}
        ],
        "price": "1,45,567",
        "image": "europe3.png"
      },
      {
        "id": 7,
        "name": "A Lovely 6 nights to Hanoi and Ho Chi Minh for 5 days",
        "stay": "Hanoi (3N) > Ho Chi Minh (3N)",
        "offerings": [
            "Attraction",
            "Leisure"
        ],
        "activities": [
            "Half-day City Tour of Hanoi including Water Puppet show with Private transfers ",
            "Cu Chi Tunnels and Saigon City tour Full Day with Lunch"
        ],
        "inclusions": [
            {"act": "Hotel", "status": "check"},
            {"act": "2 activities", "status": "check"},
            {"act": "Visa fees", "status": "check"},
            {"act": "Transfers", "status": "check"},
            {"act": "Flights", "status": "x"}
        ],
        "price": "41,541",
        "image": "vietnam3.png"
      }
    ]

  constructor(private hackService: HackService, private modalService: BsModalService) { }

  ngOnInit(): void { 
    this.getPackageInfo();
    this.getSimilarItems();
  }

  getPackageInfo(){
    let data = JSON.parse(localStorage.getItem("data") || '{}');
    if (Object.entries(data).length !== 0) {
      this.hackService.getSinglePackage(data['name'], data['id'][0]).subscribe( data => {
      this.packageInfo = [data];
    })
    }
  }

  getSimilarItems() {
    let num = Math.floor(Math.random() * 3) + 2;
    let indices: number[] = []
    let i = 0;

    while(i<=num){
    let num = Math.floor(Math.random() * this.wishlistedItems.length-1) + 1;
    if(!indices.includes(num)){
        indices.push(num)
        i++;
      }
    }
    console.log("indices: ", indices);

    for (let x of indices){
      this.wishlistedInfo.push(this.wishlistedItems[x])
    }
  }
  
  openModal(template?: TemplateRef<any>) {
    this.starRating = 0;
    if (template) {
        this.modalRef = this.modalService.show(template);
      }
  }

}
