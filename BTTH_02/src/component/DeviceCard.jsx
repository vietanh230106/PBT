function DeviceCard({ device }) {
  return (
    <div className="card">
      <h3>{device.name}</h3>

      <p>SN: {device.serial}</p>

      <p>{device.type}</p>

      <p>{device.status}</p>

      <div className="btn-group">
        <button>Sửa</button>
        <button>Xóa</button>
      </div>
    </div>
  );
}

export default DeviceCard;