import React, { useEffect } from "react";
import useChange from "../../hooks/useChange";
import Loader from "./loader";
const SelectLocation = (props) => {
  const submitLocation = () => {
    props.changeIndex(2);
  };

  const [locationList, changeLocationList] = useChange([]);
  const [pageNumber, changePageNumber] = useChange(1);
  const [selectedLocation, changeSelectedLocation] = useChange("");
  const [scroll, , changeScroll] = useChange(false);

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await fetch(
        `https://parseapi.back4app.com/classes/india_cities_database?skip=${
          (pageNumber - 1) * 18
        }&limit=18&order=ascii_name&keys=ascii_name`,
        {
          headers: {
            "X-Parse-Application-Id":
              "k9wzhXDJckHtuuKmMEm8hceXoCZMvxN4CTijZOjn", // This is the fake app's application id
            "X-Parse-Master-Key": "EpjKI6bUlgkIbOAAUaDKDFj6x2C3AnsZZJqoa4ak", // This is the fake app's readonly master key
          },
        }
      );
      const data = await response.json(); // Here you have the data that you need
      const newLocations = data.results.map((element) => {
        return element.ascii_name;
      });

      changeLocationList([...locationList, ...newLocations]);
    };
    fetchLocation();
  }, [pageNumber, changeLocationList, locationList]);
  return (
    <>
      {locationList.length !== 0 ? (
        <section className="select-location">
          <section className="scrollbar-section">
            <label className="location-label">Select Location : </label>
            <section className="scrollBar">
              <select
                id="location"
                style={{ width: "140px" }}
                value={selectedLocation}
                onChange={(e) => {
                  if (scroll) changeSelectedLocation(e.target.value);
                }}
                onClick={(e) => {
                  console.log("clicked");
                  if (!scroll) {
                    console.log("i am ib");
                    e.target.size = "6";
                    changeScroll();
                  } else {
                    e.target.parentNode.size = "1";

                    console.log("hello");
                    changeScroll();
                  }
                }}
                onScroll={(e) => {
                  const relativeYPosition =
                    e.target.scrollTop - 300 * (pageNumber - 1);
                  if (relativeYPosition > 150) {
                    changePageNumber(pageNumber + 1);
                  }
                }}
              >
                {scroll ? (
                  locationList.map((location, index) => {
                    return (
                      <option
                        key={index}
                        value={location}
                        className="option-location"
                      >
                        {location}
                      </option>
                    );
                  })
                ) : (
                  <option value={selectedLocation} className="option-location">
                    {selectedLocation}
                  </option>
                )}
              </select>
            </section>
            <br />
          </section>
          <button
            className="submit-location form-buttons"
            onClick={submitLocation}
          >
            Next
          </button>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default SelectLocation;
