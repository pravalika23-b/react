import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const OrderTracking = () => {
  const [position, setPosition] = useState([13.0827, 80.2707]); // Chennai

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(([lat, lng]) => [lat + 0.0005, lng + 0.0005]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: "80vh" }}>
      <h2 style={{ textAlign: "center" }}>🚚 Your Order is on the Way.Just 5 more minutes to reached </h2>

      <MapContainer center={position} zoom={15} style={{ height: "100%" }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Delivery Partner 📍</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default OrderTracking;
