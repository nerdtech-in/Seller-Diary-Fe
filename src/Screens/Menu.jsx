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
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '../Store/actions';
import { useLocation } from 'react-router-dom';
export default function Menu() {
  const [activeTab, setActiveTab] = React.useState('Kabhi-Kabhi');
  const [loading,setLoading] = React.useState(false)
  const [data,setData] =React.useState([])
  const path = useLocation()
  const token = useSelector(state=>state.Reducers.access)
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(getMenu(path?.pathname,setData,setLoading,token,setActiveTab))
    console.log(data);
  },[dispatch])
  return (
    <div>
      <Header title={"Menu"} />
      <div className="w-full pt-4 p-0 md:p-6 pl-0 md:pl-16 font-Raleway">
       <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-none bg-transparent p-0 px-[24px] w-full"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-900 shadow-none border-primary rounded-none",
            }}
          >
            {data?.categories?.map(({ name }) => (
              <Tab
                key={name}
                value={name}
                onClick={() => setActiveTab(name)}
                className={
                  activeTab === name ? "text-primary font-Title text-sm" : "text-black text-sm font-Title"
                }
              >
                {name}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="md:mt-4 w-full ">
            {data?.categories?.map(({ name, subcategories }) => (
              <TabPanel
                key={name}
                value={name}
                className="text-font-color bg-page-bg p-4 md:p-10 rounded"
              >
                {subcategories?.map((item, index) => (
                  <>
                    <p
                      key={index}
                      className="text-font-color font-Title text-xl text-primary bg-page-bg p-2 md:p-10 rounded"
                    >
                      {item?.name}
                    </p>
                    {
                      item?.menus?.map((item, index) => (
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
