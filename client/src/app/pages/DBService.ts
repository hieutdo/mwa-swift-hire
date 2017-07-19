import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';


@Injectable()
export class DBService {
categories:any[];
  constructor(public http: Http) {
   this.categories =[ {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}];
  }

  getNearestJobs(){
    let items: any=[
    {
    "item_id": "1",
    "name": "Web Design",
    "description": "Design a web for a small shopping clothes.Design a web for a small shopping clothesDesign a web for a small shopping clothesDesign a web for a small shopping clothesDesign a web for a small shopping clothesDesign a web for a small shopping clothesDesign a web for a small shopping clothes",
    "category": "Web Design",
    "location":"street, city, state",
    "duration":"10",
    "feerate":"20$",
    "preferdate":"07/19/2017",
    "prefertime":"08:00 AM",
    "status":"open",
    "icon": "account_circle",
    "created" : "07/13/2017 11:05 AM"
  },{
    "item_id": "2",
    "name": "Bobby Daniels",
    "description": "made a deposit of $25.15",
    "icon": "account_balance_wallet",
    "created" : "07/01/2016 03:41 PM"
  },{
    "item_id": "3",
    "name": "John Walker",
    "description": "changed refresh settings on their account",
    "icon": "autorenew",
    "created" : "06/15/2016 09:02 AM"
  },{
    "item_id": "4",
    "name": "Eddy Stevens",
    "description": "liked the latest announcements",
    "icon": "thumb_up",
    "created" : "03/23/2016 11:01 PM"
  },{
    "item_id": "5",
    "name": "Jan Williams",
    "description": "sent a personal message to a user",
    "icon": "message",
    "created" : "12/23/2015 11:05 AM"
  }
];  
//console.log(items.json());.map((res: Response) => res.json())
  return items;
  }

  getMyOffers(userName: string){
    let items: any[]=[
    {
    "item_id": "1",
    "name": "Web Design",
    "description": "Design a web for a small shopping clothes.Design a web for a small shopping clothesDesign a web for a small shopping clothesDesign a web for a small shopping clothesDesign a web for a small shopping clothesDesign a web for a small shopping clothesDesign a web for a small shopping clothes",
    "category": "Web Design",
    "location":"street, city, state",
    "duration":"10",
    "feerate":"20$",
    "preferdate":"07/19/2017",
    "prefertime":"08:00 AM",
    "status":"open",
    "icon": "account_circle",
    "created" : "07/13/2017 11:05 AM"
  },{
    "item_id": "2",
    "name": "Bobby Daniels",
    "description": "made a deposit of $25.15",
    "icon": "account_balance_wallet",
    "created" : "07/01/2016 03:41 PM"
  },{
    "item_id": "3",
    "name": "John Walker",
    "description": "changed refresh settings on their account",
    "icon": "autorenew",
    "created" : "06/15/2016 09:02 AM"
  },{
    "item_id": "4",
    "name": "Eddy Stevens",
    "description": "liked the latest announcements",
    "icon": "thumb_up",
    "created" : "03/23/2016 11:01 PM"
  },{
    "item_id": "5",
    "name": "Jan Williams",
    "description": "sent a personal message to a user",
    "icon": "message",
    "created" : "12/23/2015 11:05 AM"
  }
];  

    return items;
  }

  getCategory(){    
    return this.categories;
  }

  addNewJob(job: any){

  }
}
