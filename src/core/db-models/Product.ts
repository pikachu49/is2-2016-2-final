import {BaseModel} from './BaseModel.ts';

export interface Product extends BaseModel {
    name: string;
    providerId: string;
}