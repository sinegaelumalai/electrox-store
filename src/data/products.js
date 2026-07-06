import watch from "../assets/watch.png";
import earbuds from "../assets/earbuds.webp";
import speaker from "../assets/speaker.png";
import powerbank from "../assets/powerbank.png";

import keyboard from "../assets/keyboard.png";
import mouse from "../assets/mouse.png";
import webcam from "../assets/webcam.png";
import ring from "../assets/ring.png";

const products = [
  {
    id: 1,
    name: "Noise Smart Watch",
    category: "Watch",
    price: 2999,
    image: watch,
    description:
      "Experience a premium smartwatch with a vibrant AMOLED display, heart rate monitoring, sleep tracking, fitness modes, and up to 7 days of battery life.",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    category: "Earbuds",
    price: 1999,
    image: earbuds,
    description:
      "Enjoy crystal-clear sound with Bluetooth 5.3, deep bass, ENC noise cancellation, touch controls, and long-lasting battery performance.",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    category: "Speaker",
    price: 2499,
    image: speaker,
    description:
      "Portable Bluetooth speaker delivering immersive sound, rich bass, IPX5 water resistance, and up to 12 hours of continuous playback.",
  },
  {
    id: 4,
    name: "Power Bank",
    category: "Power Bank",
    price: 1499,
    image: powerbank,
    description:
      "10000mAh fast-charging power bank with dual USB outputs, Type-C input, compact design, and advanced safety protection.",
  },
  {
    id: 5,
    name: "Gaming Keyboard",
    category: "Keyboard",
    price: 3499,
    image: keyboard,
    description:
      "Mechanical gaming keyboard with RGB backlighting, anti-ghosting keys, customizable lighting effects, and durable switches for gamers.",
  },
  {
    id: 6,
    name: "Gaming Mouse",
    category: "Mouse",
    price: 1799,
    image: mouse,
    description:
      "Ergonomic gaming mouse featuring adjustable DPI, RGB lighting, programmable buttons, and high-precision optical tracking.",
  },
  {
    id: 7,
    name: "HD Webcam",
    category: "Webcam",
    price: 2799,
    image: webcam,
    description:
      "Full HD 1080p webcam with built-in microphone, auto-focus, low-light correction, and USB plug-and-play support for meetings and streaming.",
  },
  {
    id: 8,
    name: "Smart Ring",
    category: "Smart Ring",
    price: 5999,
    image: ring,
    description:
      "Advanced smart ring with heart rate tracking, sleep monitoring, activity tracking, waterproof design, and long battery life in a compact form.",
  },
];

export default products;