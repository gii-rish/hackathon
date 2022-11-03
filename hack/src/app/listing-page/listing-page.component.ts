import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HackService } from '../services/hack.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as $ from "jquery";

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {

  listItem: any;
  color = 'red';
  color1 = 'red';
  color2 = 'red';
  starRating = 0;
  name!: string;
  packageInfo: any = [];
  modalRef?: BsModalRef;

  constructor(private router: Router, private route: ActivatedRoute, private hackService: HackService, private modalService: BsModalService) {  
  route.params.subscribe((params:any) => {
        this.name = params['packageName'];
        this.getPackageInfo(this.name);
    });  
  }
  
  ngOnInit(): void { }

  getPackageInfo(name: string){
    console.log("name: ", name);
    this.hackService.getPackage(name).subscribe( data => {
      this.packageInfo = data;
    })
  }

  cancel(){
    this.router.navigate(['/flights'])
  }

    openModal(id: number, index: any, template?: TemplateRef<any>) {      
      $("#"+String(index)).attr('class', 'bi bi-heart-fill');
      this.starRating = 0;
      let data = JSON.parse(localStorage.getItem("data") || '{}');
      console.log("Data: ", data);

      if(Object.entries(data).length !== 0 && this.name === data['name'] && !data['id'].includes(id)){
        data['id'].push(id)
        localStorage.setItem('data', JSON.stringify(data));
      }else if(Object.entries(data).length !== 0 && this.name !== data['name']){        
        localStorage.removeItem("data");
        localStorage.setItem('data', JSON.stringify({name: this.name, id: [id]}));
      }else{        
        localStorage.setItem('data', JSON.stringify({name: this.name, id: [id]}));
      }

    if (template) {
      this.modalRef = this.modalService.show(template);
    }  
  }

}
