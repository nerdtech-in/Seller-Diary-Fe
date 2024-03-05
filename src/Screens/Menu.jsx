import React from 'react'
import BottomTab from '../Components/BottomTab';
import Header from '../Components/Header'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import FoodCard from '../Components/FoodCard';
export default function Menu() {
  const [activeTab, setActiveTab] = React.useState("garam");
  const data = [
    {
      label: "Garma-गरम",
      value: "garam",
      desc: [
        {
          title: "Pizza",
          product: []
        },
        {
          title: "Burger",
          product: []
        },
      ],
    },
    {
      label: "Thanda-ठंडा",
      value: "brunch",
      desc: [
        {
          title: "Pizza",
          product: [
            {
              name: "Margherita",
              price: "12.00"
            },
            {
              name: "Cheese",
              price: "10.00"
            },
            {
              name: "Garlic",
              price: "15.00"
            },

          ]
        },
        {
          title: "Burger",
          product: [
            {
              name: "Veg Burger",
              price: "10.00"
            },
            {
              name: "Cheese Burger",
              price: "18.00"
            }
          ]
        },
      ],
    },

    {
      label: "Saath-साथ",
      value: "saath",
      desc: [
        {
          title: "Chai",
          product: []
        },
        {
          title: "Coffee",
          product: []
        },
      ],
    },
    {
      label: "Khana-खाना",
      value: "khana",
      desc: [
        {
          title: "Chai",
          product: []
        },
        {
          title: "Coffee",
          product: []
        },
      ],
    },
    {
      label: "Kabhi-कभी",
      value: "kabhi",
      desc: [
        {
          title: "Chai",
          product: []
        },
        {
          title: "Coffee",
          product: []
        },
      ],
    }
  ];
  return (
    <div>
      <Header title={"Menu"} />
      <div className="w-full pt-4 p-0 md:p-6 pl-0 md:pl-16 font-Raleway">
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-none bg-transparent p-0 px-2 w-full"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-900 shadow-none border-primary rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={
                  activeTab === value ? "text-primary font-Title text-sm" : "text-black text-sm font-Title"
                }
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="md:mt-4 w-full ">
            {data.map(({ value, desc }) => (
              <TabPanel
                key={value}
                value={value}
                className="text-font-color bg-page-bg p-4 md:p-10 rounded"
              >
                {desc.map((item, index) => (
                  <>
                    <p
                      className="text-font-color font-Title text-xl text-primary bg-page-bg p-2 md:p-10 rounded"
                    >
                      {item?.title}
                    </p>
                    {
                      item?.product.map((item, index) => (
                        <FoodCard key={index} item={item} />
                      ))
                    }
                  </>
                ))}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
      <BottomTab />
    </div>
  )
}
