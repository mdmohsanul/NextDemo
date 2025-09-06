import photo1 from "@/assets/Image1.jpg"
import photo2 from "@/assets/Image2.jpg"
import photo3 from "@/assets/Image3.jpg"
import photo4 from "@/assets/Image4.jpg"
import photo5 from "@/assets/Image5.jpg"
import photo6 from "@/assets/Image6.jpg"
import photo7 from "@/assets/Image7.jpg"
import photo8 from "@/assets/Image8.jpg"
import { StaticImageData } from "next/image"



type Monument = {
    id:number,
    name:string,
    src:StaticImageData,
    photographer:string,
    location:string
}

export const monuments: Monument[] = [
  {
    id: 1,
    name: "Statue of Unity",
    src: photo1,
    photographer: "Arjun Mehta",
    location: "Kevadia, India",
  },
  {
    id: 2,
    name: "Eiffel Tower",
    src: photo2,
    photographer: "Claire Dubois",
    location: "Paris, France",
  },
  {
    id: 3,
    name: "Taj Mahal",
    src: photo3,
    photographer: "Rahul Sharma",
    location: "Agra, India",
  },
  {
    id: 4,
    name: "Great Wall of China",
    src: photo4,
    photographer: "Li Wei",
    location: "Beijing, China",
  },
  {
    id: 5,
    name: "Colosseum",
    src: photo5,
    photographer: "Marco Rossi",
    location: "Rome, Italy",
  },
  {
    id: 6,
    name: "Christ the Redeemer",
    src: photo6,
    photographer: "Ana Silva",
    location: "Rio de Janeiro, Brazil",
  },
  {
    id: 7,
    name: "Pyramids of Giza",
    src: photo7,
    photographer: "Omar Hassan",
    location: "Giza, Egypt",
  },
  {
    id: 8,
    name: "Sydney Opera House",
    src: photo8,
    photographer: "Liam Johnson",
    location: "Sydney, Australia",
  },
];