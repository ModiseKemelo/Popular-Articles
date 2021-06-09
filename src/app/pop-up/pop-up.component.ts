import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  async oneDay() {
    const period: any = 1;
    await this.popoverController.dismiss(period);
  }

  async sevenDays() {
    const period: any = 7;
    await this.popoverController.dismiss(period);
  }

  async thirtyDays() {
    const period: any = 30;
    await this.popoverController.dismiss(period);
  }

}
