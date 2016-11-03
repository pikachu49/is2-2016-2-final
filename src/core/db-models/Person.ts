import {BaseModel} from './BaseModel.ts';

export interface Person extends BaseModel {
    name: string;
    lastname: string;
    email: string;
}