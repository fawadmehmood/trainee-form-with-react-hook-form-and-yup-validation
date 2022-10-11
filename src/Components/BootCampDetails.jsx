import React, { useState, useEffect } from "react";
import Label from "../sharedComponents/Label";
import { cities, techTrack, bootCamp1 } from "../selectUtils1";

const BootCampDetails = () => {
  const [city, setCity] = useState([]);
  const [track, setTrack] = useState([]);
  const [bCamp, setBootcamp] = useState([]);
  const [cityId, setCityId] = useState(1);

  useEffect(() => {
    setCity(cities);
  }, []);

  const citiesOptions = city.map((ci) => {
    return (
      <option key={ci.id} value={ci.id}>
        {ci.cName}
      </option>
    );
  });

  const handleTrack = (e) => {
    setTrack([]);

    const id = parseInt(e.target.value);
    const { technologyTrack } = cities.find((city) => city.id === id);

    const technologyTrackOptions = technologyTrack.map((id) => {
      return techTrack.find((tr) => {
        return tr.id === id;
      });
    });
    setTrack(technologyTrackOptions);
    setCityId(id);
  };

  const handleBootCamp = (e) => {
    const id = parseInt(e.target.value);
    const { bootCmp } = cities.find((city) => {
      return city.id === cityId;
    });

    const bootCampOptions = bootCmp[id].map((id) => {
      return bootCamp1.find((bc) => {
        return bc.id === id;
      });
    });

    setBootcamp(bootCampOptions);
  };

  const trackOptions = track.map((tr) => {
    return (
      <option key={tr.id} value={tr.id}>
        {tr.tName}
      </option>
    );
  });

  const bootCampOptions = bCamp.map((bCamp) => {
    return (
      <option key={bCamp.id} value={bCamp.id}>
        {bCamp.bName}
      </option>
    );
  });

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
        <select
          name="ttrack1"
          id="ttrack1"
          className="input borders"
          onChange={handleBootCamp}
        >
          <option id="disabled-value" value={""}>
            Choose a Technology Track
          </option>
          {trackOptions}
        </select>
      </div>

      <div className="flexElement">
        <Label labelFor="bCamp1" labelText="Select BootCamp:" />
        <select name="bCamp1" id="bCamp1" className="input borders">
          <option id="disabled-value" value={""}>
            Choose a BootCamp
          </option>
          {bootCampOptions}
        </select>
      </div>
    </fieldset>
  );
};

export default BootCampDetails;
