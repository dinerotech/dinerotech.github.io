import React from "react";

export interface ViewProps {
  city: string;
  AddressLineOne: string;
  AddressLineTwo: string;
}

export default function View({
  city,
  AddressLineOne,
  AddressLineTwo
}: ViewProps) {
  return (
    <div>
      <h3 className="border-l border-sky-600 pl-6 font-semibold text-gray-900">
        {city}
      </h3>
      <address className="border-l border-gray-300 pt-2 pl-6 text-gray-600 not-italic">
        <p>{AddressLineOne}</p>
        <p>{AddressLineTwo}</p>
      </address>
    </div>
  );
}
