import {BaseModel} from './BaseModel.ts';

export interface Credentials extends BaseModel {
    personId: string;
    password: string;
}