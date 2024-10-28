import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./branchship.css";

const BranchShipping = ({ onMoveSuccess }) => {
  const [fromWarehouse, setFromWarehouse] = useState("");
  const [toWarehouse, setToWarehouse] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [warehouses, setWarehouses] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moving, setMoving] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch warehouses and items when the component mounts
  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/warehouses");
        if (!response.ok) throw new Error("Failed to fetch warehouses");
        const data = await response.json();
        setWarehouses(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load warehouses. Please try again.");
      }
    };
    fetchWarehouses();
  }, []);

  // Update items when fromWarehouse changes
  useEffect(() => {
    if (fromWarehouse) {
      setItems(fromWarehouse.stock || []);
    } else {
      setItems([]);
    }
  }, [fromWarehouse]);

  const moveItem = async () => {
    if (!fromWarehouse || !toWarehouse || !selectedItem || !quantity) {
      alert("Please fill all fields correctly.");
      return;
    }

    setMoving(true);

    try {
      const response = await fetch("http://localhost:8080/api/warehouses/move", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemName: selectedItem,
          quantity: parseInt(quantity),
          fromWarehouseId: fromWarehouse.name, // Using _id to match backend
          toWarehouseId: toWarehouse.name,
        }),
      });

      if (!response.ok) throw new Error("Failed to move item");

      alert("Item moved successfully!");
      if (onMoveSuccess) onMoveSuccess();

      // Reset the form
      setFromWarehouse("");
      setToWarehouse("");
      setSelectedItem("");
      setQuantity("");
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setMoving(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="branch-shipping-container">
      <h1>Branch Shipping</h1>

      {error && <p className="error">{error}</p>}

      <div>
        <label>From Warehouse:</label>
        <select
          value={fromWarehouse ? JSON.stringify(fromWarehouse) : ""}
          onChange={(e) => setFromWarehouse(JSON.parse(e.target.value))}
        >
          <option value="">Select Warehouse</option>
          {warehouses.map((wh) => (
            <option key={wh._id} value={JSON.stringify(wh)}>
              {wh.name} - {wh.location}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>To Warehouse:</label>
        <select
          value={toWarehouse ? JSON.stringify(toWarehouse) : ""}
          onChange={(e) => setToWarehouse(JSON.parse(e.target.value))}
        >
          <option value="">Select Warehouse</option>
          {warehouses.map((wh) => (
            <option key={wh._id} value={JSON.stringify(wh)}>
              {wh.name} - {wh.location}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Item Name:</label>
        <select
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value)}
        >
          <option value="">Select Item</option>
          {items.map((item) => (
            <option key={item.itemId} value={item.itemName}>
              {item.itemName}-{item.quantity}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity to move"
          required
        />
      </div>

      <button
        onClick={moveItem}
        disabled={moving || !fromWarehouse || !toWarehouse || !selectedItem || !quantity}
      >
        {moving ? "Moving..." : "Move Item"}
      </button>
      <button onClick={() => navigate("/home")} style={{ marginLeft: "10px" }}>
        Back to Home
      </button>
    </div>
  );
};

export default BranchShipping;
