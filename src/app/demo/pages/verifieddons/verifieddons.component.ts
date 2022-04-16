import { Component, OnInit } from '@angular/core';
import { OrderEntity } from 'src/app/_models/order-entity';
import { OrderState } from 'src/app/_models/order-state.enum';
import { OrderStateTextUtil } from 'src/app/_utils/order-state-text.enum';

@Component({
  selector: 'app-verifieddons',
  templateUrl: './verifieddons.component.html',
  styleUrls: ['./verifieddons.component.scss']
})
export class VerifieddonsComponent implements OnInit {

  constructor() { }
  orderEntities: Array<OrderEntity> = [];

  ngOnInit(): void {
    this.initOrderEntities();

  }
  initOrderEntities() {
    const orderEntityProcessed: OrderEntity = {} as OrderEntity;
    orderEntityProcessed.orderState = OrderState.COMPLETED;
    orderEntityProcessed.orderStateText = OrderStateTextUtil.ORDER_PROCESSED;

    const orderEntityApproved: OrderEntity = {} as OrderEntity;
    orderEntityApproved.orderState = OrderState.TODO;
    orderEntityApproved.orderStateText = OrderStateTextUtil.ORDER_DECLINED;

    const orderEntityShipped: OrderEntity = {} as OrderEntity;
    orderEntityShipped.orderState = OrderState.DECLINED;
    orderEntityShipped.orderStateText = OrderStateTextUtil.ORDER_SHIPPED;

    const orderEntityInTransit: OrderEntity = {} as OrderEntity;
    orderEntityInTransit.orderState = OrderState.DECLINED;
    orderEntityInTransit.orderStateText = OrderStateTextUtil.ORDER_IN_TRANSIT;

    const orderEntityDelivered: OrderEntity = {} as OrderEntity;
    orderEntityDelivered.orderState = OrderState.DECLINED;
    orderEntityDelivered.orderStateText = OrderStateTextUtil.ORDER_DELIVERED;

    this.orderEntities.push(orderEntityProcessed);
    this.orderEntities.push(orderEntityApproved);
    this.orderEntities.push(orderEntityShipped);
    this.orderEntities.push(orderEntityInTransit);
    this.orderEntities.push(orderEntityDelivered);

  }

}
