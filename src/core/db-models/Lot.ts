import {BaseModel} from './BaseModel.ts';

export interface Lot extends BaseModel {
    code: string;
    productId: string;
}