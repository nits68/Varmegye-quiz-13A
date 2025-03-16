import { Schema } from "mongoose";

export interface ICountry {
    _id: number;
    name: string;
    flag_url_small: string;
    flag_url_big: string;
    population: number;
    area: number;
}