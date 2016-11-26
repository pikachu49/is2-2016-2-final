import {BaseModel} from './BaseModel.ts';

export interface Order extends BaseModel {
    productId: string;
}