import React, { useContext, useState } from "react";
import SearchBar from "../components/SearchBar";
// import { PROPERTIES } from "../constants/data";
import Item from "../components/Item";
import useProperties from "../hooks/useProperties.jsx";
import { PuffLoader } from "react-spinners";
import UserDetailContext from "../context/userDetailContext.js";

const Bookings = () => {
  const { data, isError, isLoading } = useProperties();
  // console.log(data);

  const [filter, setFilter] = useState("");
const {userDetails:{bookings}}= useContext(UserDetailContext)

  if (isError) {
    return (
      <div className="h-64 flexCenter">
        <span>Error while fetching data</span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="h-64 flexCenter">
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#555"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <main className="max-padd-container my-[99px]">
      <div className="max-padd-container py-10 xl:py-20 bg-primary rounded-3xl">
        <div>
          <SearchBar filter={filter} setFilter={setFilter} />
          {/* container */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10">
            {
              data
                //.filter((property)=>bookings.includes(property.id))
                 .filter((property)=>bookings.map((booking)=>booking.id).includes(property.id)) 
                .filter((property) =>
                  property.title.toLowerCase().includes(filter.toLowerCase()) ||
                  property.city.toLowerCase().includes(filter.toLowerCase()) ||
                  property.country.toLowerCase().includes(filter.toLowerCase()) 
                )
                .map((property) => (
                  <Item key={property.title} property={property} />
                ))
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default Bookings;
