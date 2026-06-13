import DeviceCard from "./DeviceCard";

function DeviceList({ devices }) {
  return (
    <div className="grid">
      {devices.map((device) => (
        <DeviceCard
          key={device.id}
          device={device}
        />
      ))}
    </div>
  );
}

export default DeviceList;