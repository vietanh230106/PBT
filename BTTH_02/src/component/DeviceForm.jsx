import { useState } from "react";

function DeviceForm({ addDevice, onClose }) {
  const [name, setName] = useState("");
  const [serial, setSerial] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = () => {
    addDevice({
      id: Date.now(),
      name,
      serial,
      type,
      status: "Hoạt động"
    });

    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">

        <h2>Thêm Thiết bị</h2>

        <input
          placeholder="Tên thiết bị"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Số Serial"
          onChange={(e) => setSerial(e.target.value)}
        />

        <input
          placeholder="Loại thiết bị"
          onChange={(e) => setType(e.target.value)}
        />

        <button onClick={handleSubmit}>
          Lưu
        </button>

        <button onClick={onClose}>
          Hủy
        </button>

      </div>
    </div>
  );
}

export default DeviceForm;