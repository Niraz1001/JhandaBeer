import { CardIn, Contact, GalleryIn, NavItem } from "@/src/types"


 export const NavItemData: NavItem[]= [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Product",
        href: "/products"
    },
    {
        name: "Our Story",
        href: "/our-story"
    },
    {
        name: "Contact",
        href: "/contact"
    },
 ]


 export const QuickLinkData: NavItem[]= [
    {
        name: "Product",
        href: "/products"
    },
    {
        name: "Our Story",
        href: "/our-story"
    },
    {
        name: "Contact",
        href: "/contact"
    },
 ]

 export const legalData: NavItem[]= [
    {
        name: "Privacy Policy",
        href: "/"
    },
    {
        name: "Terms and Conditions",
        href: "/"
    },
 ]

 export const ContactData: Contact[] =[
    {
        name: "EMAIL:",
        des: "info@jhandabeer.com",
    },
    {
        name: "PHONE:",
        des: "9813682666",
    },
    {
        name: "ADDRESS:",
        des: "JAPAN",
    },
]

export const GalleryData:GalleryIn[] = [
    {
        img: "/gallery/5.png"
    },
    {
        img: "/gallery/2.png"
    },
    {
        img: "/gallery/3.png"
    },
    {
        img: "/gallery/4.png"
    },
    {
        img: "/gallery/1.png"
    },
]
 

export const Brewing:CardIn[]= [
    {
        img: "/img/9.png",
        name: "The Aroma",
        des: "Handpicked ingredients that create our signature scent"
    },
    {
        img: "/img/10.png",
        name: "The Fire",
        des: "Traditional brewing methods meeting modern precision"
    },
    {
        img: "/img/11.png",
        name: "The Chill",
        des: "Perfecting temperature for optimal taste"
    },
    {
        img: "/img/12.png",
        name: "The Pour",
        des: "The final touch of perfection"
    },
]