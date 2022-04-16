import {Component, Input, OnInit} from '@angular/core';
import {OrderStateTextUtil} from '../../../_utils/order-state-text.enum';
import {OrderState} from '../../../_models/order-state.enum';
import {OrderEntity} from '../../../_models/order-entity';
@Component({
  selector: 'app-donationtracker',
  templateUrl: './donationtracker.component.html',
  styleUrls: ['./donationtracker.component.scss']
})
export class DonationtrackerComponent implements OnInit {

  orderStateTextUtil: OrderStateTextUtil;
  orderState: OrderState;
  orderEntity: OrderEntity;
  @Input()
  public orderEntities: Array<OrderEntity> = [];

  constructor() {
  }

  ngOnInit() {
    this.initComponent();
  }

  initComponent(): void {
  }

}
