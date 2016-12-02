import {BaseModel} from './BaseModel.ts';

export interface OrderLot extends BaseModel {
    orderId: string;
    lotId: string;
}