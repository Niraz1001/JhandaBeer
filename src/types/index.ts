import { JSX } from "react";

export interface NavItem {
    name: string;
    href: string;
}

export interface CardIn {
    img: string
    name: string;
    des: string
}

export interface Contact {
    name: string;
    des: string;
}

export interface GalleryIn {
    img: string;
}

export interface TestingIn {
    icon: JSX.Element,
    title: string,
    desc: string
}