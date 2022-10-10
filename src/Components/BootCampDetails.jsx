import React, { useState } from "react";
import Label from "../sharedComponents/Label";
import { cities, techTrack } from "../selectUtils1";

const BootCampDetails = () => {
  const [track, setTrack] = useState([]);
  const [bCamp, setBootcamp] = useState([]);

  console.log("rerender");

  const citiesOptions = cities.map((city) => {
    return (
      <option key={city.id} value={city.id}>
        {city.cName}
      </option>
    );
  });

  const handleTrack = (e) => {
    const id = parseInt(e.target.value);
    const { technologyTrack } = cities.find((city) => city.id === id);
    console.log(technologyTrack);

    const technologyTrackOptions = technologyTrack.map((id) => {
      return techTrack.find((tr) => {
        return tr.id === id;
      });
    });
    console.log(technologyTrackOptions);
    setTrack(technologyTrackOptions);
  };

  //   const handleBootCamp = (e) => {
  //     const id = parseInt(e.target.value);
  //     const bootCampOptions = bootCamp.filter((tt) => tt.trackId === id);
  //     setBootcamp(bootCampOptions);
  //   };

  const trackOptions = track.map((tr) => {
    return (
      <option key={tr.id} value={tr.id}>
        {tr.tName}
      </option>
    );
  });

  //   const bootCampOptions = bCamp.map((camp) => {
  //     return (
  //       <option key={camp.id} value={camp.id}>
  //         {camp.name}
  //       </option>
  //     );
  //   });

  return (
    <fieldset className="border p-3">
      <legend className="font-medium tracking-tighter ">
        Boot Camp Priority
      </legend>

      <div className="flexElement">
        <Label labelFor="city1" labelText="Select City:" />
        <select
          name="city1"
          id="city1"
          className="input borders"
          onChange={handleTrack}
        >
          <option id="disabled-value" value={""}>
            Choose City
          </option>
          {citiesOptions}
        </select>
      </div>
      <div className="flexElement">
        <Label labelFor="ttrack1" labelText="Select Technology Track:" />
        <select name="ttrack1" id="ttrack1" className="input borders">
          <option id="disabled-value" value={""}>
            Choose a Technology Track
          </option>
          {trackOptions}
        </select>
      </div>

      <div className="flexElement">
        <Label labelFor="bCamp1" labelText="Select BootCamp:" />
        <select name="bCamp1" id="bCamp1" className="input borders">
          <option id="disabled-value" disabled="disabled" value={""}>
            Choose a BootCamp
          </option>
          {/* {bootCampOptions} */}
        </select>
      </div>
    </fieldset>
  );
};

export default BootCampDetails;
