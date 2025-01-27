import onionImage from '../assets/images/onion.png';
import strawberryImage from '../assets/images/strawberry.png';
import grapesImage from '../assets/images/delicious-bunch-grapes.jpg';
import chilliImage from '../assets/images/chilli.png';
import greenbeansImage from '../assets/images/green-beans.jpg';
import peasImage from '../assets/images/pngegg.png';
import springonionImage from '../assets/images/springonion.png';

const FruitsData = [
  {
    title: "Green Beans",
    color: "#0B6623",
    image: greenbeansImage,
    details: {
      tonnage: 1400,
      varieties: ["Bobby beans", "Fine beans", "Helda beans", "Extra fine beans"]
    },
    description: [
      "Since 1978, we have accumulated experience in production.",
      "We supply beans year-round, utilizing diverse sites across Egypt and Sudan to ensure optimal climate conditions. Our operations include open field farms and over 8,000 greenhouses, which form the foundation for the continuous supply of green beans.",
      "We meet our customers’ expectations by providing the market’s best products year-round. We pack according to each customer’s specifications, such as loose, pre-packed, trimmed, or whole beans.",
      "We produce Fine, Extra Fine, Bobby, Helda, Yellow Beans, Mange-Tout, and Sugar Snap varieties. Our production season runs from November to May, with a packing capacity of 80 tons per week. Last season, we exported around 500 tons. Our packing formats include 1.5 kg loose, 150g trays, 100g micro-perforated bags, and 200g MAP bags. Custom formats are available."
    ],
    calendarData: [
      { name: "Bobby beans", months: Array(12).fill(true) },
      { name: "Fine beans", months: Array(12).fill(true) },
      { name: "Helda beans", months: Array(12).fill(true) },
      { name: "Extra fine beans", months: Array(12).fill(true) }
    ]
  },
  {
    title: "Peas",
    color: "#03C04A",
    image: peasImage,
    details: {
      tonnage: 1400,
      varieties: ["Bobby beans", "Fine beans", "Helda beans", "Extra fine beans"]
    },
    description: [
      "Since 1980, we have been cultivating expertise in pea production.",
      "We supply high-quality peas throughout the year, utilizing diverse locations across Egypt and Sudan to ensure ideal climate conditions.",
      "We meet customer demands with the finest product, offering various packaging options, including loose, pre-packed, trimmed, or whole peas.",
      "We produce Garden Peas, Snow Peas, and Sugar Snap Peas. The production season runs from November to May, with a packing capacity of 80 tons per week. Last season, we exported approximately 500 tons. Available packing formats include 1.5kg loose, 150g trays, 100g micro-perforated bags, and 200g MAP bags."
    ],
    calendarData: [
      { name: "Sugar Snap", months: [true, true, true, false, false, false, false, false, false, false, true, true] },
      { name: "Mangetout", months: [true, true, true, false, false, false, false, false, false, false, true, true] }
    ]
  },
  {
    title: "Strawberries",
    color: "#ef4444",
    image: strawberryImage,
    details: {
      tonnage: 1400,
      varieties: ["Festival", "Fortuna", "Winter Down"]
    },
    description: [
      "Nivex entered the strawberry business in 1998.",
      "Currently, we are testing and evaluating varieties from the US, Italy, Spain, and the UK. We research various greenhouse sizes, substrate mixtures, and production locations in Egypt.",
      "We believe the nursing stage is crucial in strengthening Egyptian strawberries' market position.",
      "We offer various packing formats upon request, with our main varieties including Eliana, Fortuna, Red Merlin, Winter Down, and Festival."
    ],
    calendarData: [
      { name: "Festival", months: [true, true, true, true, true, false, false, false, false, false, true, true] },
      { name: "Fortuna", months: [true, true, true, true, true, false, false, false, false, false, true, true] },
      { name: "Winter Down", months: [true, true, true, true, true, false, false, false, false, false, true, true] }
    ]
  },
  {
    title: "Grapes",
    color: "#c7ea46",
    image: grapesImage,
    details: {
      tonnage: 2000,
      varieties: ["Sugraone", "Flame", "Prime", "Starlight", "Red Globe", "Crimson"]
    },
    description: [
      "We began grape production in 2002.",
      "We export approximately 2000 tons of grapes annually.",
      "As one of the first exporters to produce grapes in southern Egypt, our season runs from May to August."
    ],
    calendarData: [
      { name: "Sugraone", months: [false, false, false, false, true, true, false, false, false, false, false, false] },
      { name: "Flame", months: [false, false, false, false, true, true, false, false, false, false, false, false] },
      { name: "Prime", months: [false, false, false, false, true, true, false, false, false, false, false, false] },
      { name: "Starlight", months: [false, false, false, false, true, true, false, false, false, false, false, false] },
      { name: "Red Globe", months: [false, false, false, false, false, false, true, true, false, false, false, false] },
      { name: "Crimson", months: [false, false, false, false, false, false, true, true, false, false, false, false] },
      { name: "Autumn crisp", months: [false, false, false, false, false, false, true, true, false, false, false, false] },
      { name: "Ruby Rush", months: [false, false, false, false, false, false, true, true, false, false, false, false] },
      { name: "Mid Night", months: [false, false, false, false, false, true, false, false, false, false, false, false] },
      { name: "Applause", months: [false, false, false, false, false, false, false, true, true, false, false, false] },
      { name: "Epic Crisp", months: [false, false, false, false, false, false, false, false, true, true, false, false] },
      { name: "Sable Seedless", months: [false, false, false, false, false, false, true, true, false, false, false, false] },
      { name: "Scarlotta Seedless", months: [false, false, false, false, false, false, false, true, true, false, false, false] },
      { name: "Black Glory", months: [false, false, false, false, false, true, false, false, false, false, false, false] },
      { name: "Mid Night Beauty", months: [false, false, false, false, false, true, true, false, false, false, false, false] },
      { name: "Sweet Celebration", months: [false, false, false, false, false, false, false, true, true, false, false, false] },
      { name: "Sweet Glob", months: [false, false, false, false, false, false, false, false, true, true, false, false] },
      { name: "ivory", months: [false, false, false, false, false, true, true, false, false, false, false, false] },
    ]
  },
  {
    title: "Chillies",
    color: "#dc2626",
    image: chilliImage,
    details: {
      tonnage: 300,
      varieties: ["Capsicum", "Pencil Type", "Finger Type", "Fresno"]
    },
    description: [
      "We started with chillies in 2000.",
      "We export around 300 tons of chillies annually.",
      "We are one of the first exporters of chillies from southern Egypt."
    ],
    calendarData: [
      { name: "Capsicum", months: Array(12).fill(true) },
      { name: "Pencil Type", months: Array(12).fill(true) },
      { name: "Finger Type", months: Array(12).fill(true) },
      { name: "Fresno", months: Array(12).fill(true) }
    ]
  },
  {
    title: "Onions",
    color: "#f87171",
    image: onionImage,
    details: {
      tonnage: 3000,
      varieties: ["Yellow", "Red", "Spring Onion"]
    },
    description: [
      "Nivex started with onions in 1989.",
      "We work closely with Bejo to trial new varieties to maintain our market leadership in Egypt.",
      "Our onions are grown in well-rotated, isolated dry areas using natural fertilizers for healthy plant growth.",
      "We export around 5000 tons of onions annually in various sizes: 40-60mm, 50-70mm, 60-80mm, and 80-100mm."
    ],
    calendarData: [
      { name: "Yellow", months: [false, false, true, true, true, true, false, false, false, false, false, false] },
      { name: "Red", months: [false, false, true, true, true, true, false, false, false, false, false, false] }
    ]
  },
  {
    title: "Spring Onion",
    color: "#aef359",
    image: springonionImage,
    details: {
      tonnage: 3000,
      varieties: ["Yellow", "Red", "Spring Onion"]
    },
    description: [
      "Nivex started with spring onions in 1989.",
      "We grow our onions using natural pest management methods and fertilizers.",
      "Our season runs from February to July, with annual exports totaling 5000 tons across various sizes."
    ],
    calendarData: [
      { name: "Spring Onion", months: [true, true, true, true, false, false, false, false, false, true, true, true] }
    ]
  }
];

export default FruitsData;
