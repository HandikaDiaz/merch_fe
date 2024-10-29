import { GenderEnum } from "./gender-entity";

export interface ProfileEntity {
    id: number;
    username?: string;
    address: string;
    gender: GenderEnum;
    phone: number;
    image?: ProfileImageEntity;
}

export interface ProfileImageEntity {
    id: number;
    url: string;
}