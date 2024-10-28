import React, { useEffect, useState } from "react";
import "./Branch.css"; // Ensure you have a corresponding CSS file

const Branches = () => {
  const [items, setItems] = useState([]);
  const [selectedMang, setSelectedMang] = useState("");
  const [selectedPut, setSelectedPut] = useState("");
  const [selectedVit, setSelectedVit] = useState("");
  const [mangQuantity, setMangQuantity] = useState(0);
  const [putQuantity, setPutQuantity] = useState(0);
  const [vitQuantity, setVitQuantity] = useState(0);
  const [mangLoading, setMangLoading] = useState(false); // Loading state for Mangalore
  const [putLoading, setPutLoading] = useState(false); // Loading state for Puttur
  const [vitLoading, setVitLoading] = useState(false); // Loading state for Vittal
  const [error, setError] = useState(null); // Error state

  // Fetch all items when the component mounts
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/warehouses"); // Update with your backend URL
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
        setError("Failed to fetch items.");
      }
    };
    fetchItems();
  }, []);

  const fetchItemQuantity = async (warehouseId, itemId, setQuantity, setLoading) => {
    try {
      setLoading(true); // Start loading for the specific branch
      const url = `http://localhost:8080/api/itemdistribution/itemQuantity?warehouseId=${warehouseId}&itemId=${itemId}`; // Update URL as per your backend
      console.log("Request URL:", url); // Log the URL

      const response = await fetch(url);

      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched Data:", data); // Log the fetched data
      setQuantity(data.quantity); // Set the quantity
    } catch (error) {
      console.error("Error fetching item quantity:", error);
      alert("Failed to fetch item quantity. Please check your backend.");
    } finally {
      setLoading(false); // Stop loading for the specific branch
    }
  };

  return (
    <div className="branches-page">
      <h1 className="title">Branches</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="branch">
        <label>
          Mangalore:
          <select
            className="namebox"
            value={selectedMang}
            onChange={(e) => {
              setSelectedMang(e.target.value);
              fetchItemQuantity("m1", e.target.value, setMangQuantity, setMangLoading);
            }}
          >
            <option value="">Select one</option>
            {items.map((item) => (
              <option key={item.itemId} value={item.itemId}>
                {item.itemName}
              </option>
            ))}
          </select>
        </label>
        <p className="quantity">Quantity: {mangLoading ? "Loading..." : mangQuantity}</p>
      </div>

      <div className="branch">
        <label>
          Puttur:
          <select
            className="namebox"
            value={selectedPut}
            onChange={(e) => {
              setSelectedPut(e.target.value);
              fetchItemQuantity("p1", e.target.value, setPutQuantity, setPutLoading);
            }}
          >
            <option value="">Select one</option>
            {items.map((item) => (
              <option key={item.itemId} value={item.itemId}>
                {item.itemName}
              </option>
            ))}
          </select>
        </label>
        <p className="quantity">Quantity: {putLoading ? "Loading..." : putQuantity}</p>
      </div>

      <div className="branch">
        <label>
          Vittal:
          <select
            className="namebox"
            value={selectedVit}
            onChange={(e) => {
              setSelectedVit(e.target.value);
              fetchItemQuantity("v1", e.target.value, setVitQuantity, setVitLoading);
            }}
          >
            <option value="">Select one</option>
            {items.map((item) => (
              <option key={item.itemId} value={item.itemId}>
                {item.itemName}
              </option>
            ))}
          </select>
        </label>
        <p className="quantity">Quantity: {vitLoading ? "Loading..." : vitQuantity}</p>
      </div>
    </div>
  );
};

export default Branches;
