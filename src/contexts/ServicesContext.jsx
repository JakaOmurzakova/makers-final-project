import React, { createContext, useContext, useState } from "react";
import { useReducer } from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../utils/consts";
import axios from "axios";

const serviceContext = createContext();
export function useServiceContext() {
  return useContext(serviceContext);
}

const initState = {
  services: [],
  categories: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "services":
      return { ...state, services: action.payload };
    case "categories":
      return { ...state, categories: action.payload };
  }
}

const ServicesContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [category, setCategory] = useState();

  async function getServices() {
    try {
      const { data } = await axios.get(`${BASE_URL}/account/equipments/`);
      console.log(data);
      dispatch({
        type: "services",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  const services = [
    {
      img: "https://www.spice.com.tr/public/storage/posts/February2020/5EM1gNHyvJLlcEUZ5MZs.jpg",
      title: "Fitness",
      category: "sport",
      id: "1",
      description:
        "High qualified fitness center equipped with professional gears for professionals...",
    },
    {
      img: "https://www.spice.com.tr/public/storage/posts/November2021/osC9YDeSeRF8aHd9Qslv.jpg",
      title: "Skin Treatments",
      category: "spa",
      id: "2",
      description:
        "Each procedure is unique. Our specialists will find the therapy based on your needs. Each therapy begins with a detailed diagnosis.",
    },
    {
      img: "https://www.spice.com.tr/public/storage/posts/November2021/JuQHcWXRZ2hxSesFcR54.jpg",
      title: "Massages",
      category: "spa",
      id: "3",
      description:
        "Massage, which is done on the soles of the feet, to remove the negative energy and tension accumulated in the body. Ayurveda Shirodhara, Ayurveda Abyanga, Traditional Thai Massage, Hot Stone Massage, Balinese massage,Shiatsu, Reflexology, Aromatherapy ",
    },
    {
      img: "https://www.spice.com.tr/public/storage/posts/November2021/TMTDSYEKHmH8y6JuC0wV.jpg",
      title: "Hammams & Saunas",
      category: "spa",
      id: "4",
      description:
        "SPA expects you to evaluate the care procedures in the authentic eastern design of the Turkish hammam.",
    },
    {
      img: "https://www.spice.com.tr/public/storage/posts/April2023/9Ir6TBQq6LbMJAverfBh.jpg",
      title: "Aquapark",
      category: "events",
      id: "5",
      description:
        "Have fun in our exciting water park. Aquapark extends over an area of 1.950 square meters. Aquapark contains of one body slide 60 meters long, one multi slide with 3 channels (22 meters), kamikadze 22 meters long slide and a 12 meters high watchtower. For children: 1 tube freefall 10 meters long, 1 kids slide 22 meters long and a baby pool with water games.",
    },
    {
      img: "https://www.spice.com.tr/public/storage/posts/November2021/XAtAi9EHDbsQRSnqGVkK.jpg",
      title: "Indoor Jacuzzi Pool",
      category: "events",
      id: "6",
      description:
        "Are you ready to enjoy an unforgettable holiday with the award-winning, 300 m² semi-Olympic indoor pool at the Enar-SPA? This will easily allow you to turn your vacation into an unforgettable experience. In addition, our Jacuzzi corner and relaxation areas await you.",
    },
    {
      img: "https://www.spice.com.tr/public/storage/posts/February2020/h6zCIr434RleUYhhpafN.jpg",
      title: "Baby concept",
      category: "event concept",
      id: "7",
      description:
        "Everything you need for vacation with infants is at your disposal in Spice Hotel&SPA! Children's bathrobes and slippers, baby bath. Optional baby menu (soup, puree, porridge 08: 00- 23:00).Wet wipes.Kettle, mini plates, baby’s paper bib.Baby phone and baby bottle heater ( on request with deposit ).Aptamil milk and additional baby food jars for infants.Everything is provided free of charge on request.",
    },
    {
      img: "https://www.spice.com.tr/public/storage/posts/February2020/bZZ5pK2dS26hLZbk8XlD.jpg",
      title: "Golf",
      category: "sport",
      id: "8",
      description:
        "Discover magic world of Golf with Spice Hotel&SPA. Is currently called the paradise for Golf players. This is the place where the sun is shining brightly 365 days per year creating ideal conditions to play Golf all year round. In 2008 IAGTO (International Golf Assosiation) awarded Belek as the best Golf region in Europe.",
    },
    {
      img: "https://www.spice.com.tr/public/storage/posts/February2020/RNeXUA2yAzkVYrlAVIhy.jpg",
      title: "Tennis",
      category: "sport",
      id: "9",
      description:
        "There are 4 tennis courts on the territory of the hotel (quartz coating). At your service there is illumination and equipments (rackets and balls).",
    },
    {
      img: "https://www.spice.com.tr/public/storage/posts/November2021/IIv6iMEM4HUo6lBXNzKZ.jpg",
      title: "Conference Halls",
      category: "event concept",
      id: "10",
      description:
        "A different business experience in the heart of you have ever seen in your professional life. Well-designed meeting rooms and impeccable service is something you could count on our HOTEL&SPA. Whether you have a private dinner, a wedding, a formal gathering or a meeting, our Banqueting Team would tailor your event to your exact necessities through combining the contemporary understanding of the hotel management with modern technological innovations.",
    },
  ];

  const value = {
    getServices,
    categories: state.categories,
    services: state.services,
    category,
    setCategory,
    services,
  };
  return (
    <serviceContext.Provider value={value}>{children}</serviceContext.Provider>
  );
};

export default ServicesContext;
