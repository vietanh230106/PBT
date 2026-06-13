import { useState } from "react";

import "./App.css";

import data from "./data/data.json";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import DeviceList from "./components/DeviceList";
import DeviceForm from "./components/DeviceForm";

function App() {
  const [devices, setDevices] = useState(data);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const addDevice = (device) => {
    setDevices([...devices, device]);
  };

  const filteredDevices = devices.filter((device) =>
    device.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <Header />

      <button
        className="add-btn"
        onClick={() => setShowForm(true)}
      >
        + Thêm Thiết bị
      </button>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <DeviceList devices={filteredDevices} />

      {showForm && (
        <DeviceForm
          addDevice={addDevice}
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
}

export default App;