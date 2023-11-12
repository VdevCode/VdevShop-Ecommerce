import React from "react";

const AddressMap = () => {
  return (
    <div className="map-area">
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.393901735942!2d106.14740246029949!3d11.305892899158737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b6a7c776d6733%3A0x14b944034a637cb0!2zTmluaCBQaMO6LCBCw6B1IE7Eg25nLCBUcC4gVMOieSBOaW5oLCBUw6J5IE5pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1699770938764!5m2!1svi!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        
        ></iframe>
      </div>
    </div>
  );
};

export default AddressMap;
