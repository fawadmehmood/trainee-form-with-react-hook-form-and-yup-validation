import React, { useState, useEffect } from "react";
import Label from "../sharedComponents/Label";
import { cities, techTrack, bootCamp1, bc1, bc2 } from "../selectUtils1";
import Select from "../sharedComponents/Select";

const BootCamp = (props) => {
  const { bcP, legendText } = props;
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

  const optionss = [citiesOptions, trackOptions, bootCampOptions];
  const changes = [handleTrack, handleBootCamp];

  const mapSelect = bcP.map((bc, index) => {
    return (
      <div className="formElemMy" key={bc.id}>
        <Select
          labelFor={bc.labelFor}
          labelText={bc.labelText}
          name={bc.name}
          id={bc.id}
          defaultOption={bc.defaultOption}
          options={optionss[index]}
          handleChange={changes[index]}
        />
      </div>
    );
  });

  return (
    <fieldset className="borders p-3">
      <legend className="legendText">{legendText}</legend>

      {mapSelect}

      {/* <Select
        labelFor="city1"
        labelText="Select City"
        name="city1"
        id="city1"
        handleTrack={handleTrack}
        defaultOption="Choose City"
        options={citiesOptions}
      />

      <Select
        labelFor="ttrack1"
        labelText="Select Technology Track"
        name="ttrack1"
        id="ttrack1"
        handleTrack={handleBootCamp}
        defaultOption="Choose a Technology Track"
        options={trackOptions}
      />

      <Select
        labelFor="bCamp1"
        labelText="Select BootCamp"
        name="bCamp1"
        id="bCamp1"
        defaultOption="Choose a BootCamp"
        options={bootCampOptions}
      /> */}
    </fieldset>
  );
};

export default BootCamp;
