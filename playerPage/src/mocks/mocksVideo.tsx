import next1 from "../assets/images/next-1.jpg";
import next2 from "../assets/images/next-2.jpg";
import next3 from "../assets/images/next-3.jpg";
import next4 from "../assets/images/next-4.jpg";

export interface mocksVideoInterface {
  id: number;
  img: string;
  title: string;
  author: string;
  time: string;
  views: string;
}

export const mocksVideos: mocksVideoInterface[] = [
  {
    id: 1,
    img: next1,
    title: "Baby Monitor Technology",
    time: "8:00",
    views: "123k",
    author: "Dollie Blair",
  },
  {
    id: 2,
    img: next2,
    title: "A Good Autoresponder",
    time: "8:00",
    views: "123k",
    author: "Dollie Blair",
  },
  {
    id: 3,
    img: next3,
    title: "Selecting The Right Hotel",
    time: "8:00",
    views: "123k",
    author: "Dollie Blair",
  },
  {
    id: 4,
    img: next4,
    title: "Selecting The Right Hotel",
    time: "8:00",
    views: "123k",
    author: "Dollie Blair",
  },
];
