
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface User {
    userId: number;
    name?: Nullable<string>;
    email: string;
    password: string;
    ambiente?: Nullable<string>;
}

export interface IQuery {
    findByEmail(email?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
