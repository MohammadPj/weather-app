import React from 'react';

const Detail = ({selectedCountry}) => {
  return (
    <>
      <p className={"text-center font-bold"}>Country Detail</p>
      <div className="flex items-center mt-2">
        <p className={"font-bold mr-4"}>Flag :</p>
        <img src={selectedCountry?.flags?.png} width={50} height={25} alt="flag"/>
      </div>
      <p className={"mt-2 "}><span className={"font-bold"}>Capital :</span> {selectedCountry?.capital?.join()}</p>
      <p className={"mt-2 "}><span
        className={"font-bold"}>Capital Coordination :</span> {selectedCountry?.capitalInfo?.latlng.join()}</p>
      <p className={"mt-2 "}><span className={"font-bold"}>Timezone :</span> {selectedCountry?.timezones?.join()}</p>
    </>
  );
};

export default Detail;
