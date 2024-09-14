export default function FeaturesCheckbox({ features, onChange }) {
  const featureOptions = [
    { name: "airConditioner", label: "Air Conditioner" },
    { name: "digitalOdometer", label: "Digital Odometer" },
    { name: "heater", label: "Heater" },
    { name: "leatherSeats", label: "Leather Seats" },
    { name: "panoramicMoonroof", label: "Panoramic Moonroof" },
    { name: "tachometer", label: "Tachometer" },
    { name: "touchscreenDisplay", label: "Touchscreen Display" },
    { name: "antiLockBraking", label: "Anti-Lock Braking" },
    { name: "brakeAssist", label: "Brake Assist" },
    { name: "childSafetyLocks", label: "Child Safety Locks" },
    { name: "driverAirBag", label: "Driver Air Bag" },
    { name: "powerDoorLocks", label: "Power Door Locks" },
    { name: "stabilityControl", label: "Stability Control" },
    { name: "tractionControl", label: "Traction Control" },
    { name: "fogLightsFront", label: "Fog Lights Front" },
    { name: "rainSensingWiper", label: "Rain Sensing Wiper" },
    { name: "rearSpoiler", label: "Rear Spoiler" },
    { name: "windowsElectric", label: "Electric Windows" },
    { name: "comfortConvenience", label: "Comfort & Convenience" },
    { name: "androidAuto", label: "Android Auto" },
    { name: "appleCarPlay", label: "Apple CarPlay" },
    { name: "bluetooth", label: "Bluetooth" },
    { name: "homeLink", label: "HomeLink" },
    { name: "powerSteering", label: "Power Steering" },
    { name: "vanityMirror", label: "Vanity Mirror" },
  ];
  
  return (
    <><h2 className="text-2xl font-semibold py-5">Features</h2>
    <div className="grid md:grid-cols-3 grid-cols-2 md:gap-3  ">
      
      {featureOptions.map((feature) => (
        <div key={feature.name} className="flex items-center gap-2">
          <input
            type="checkbox"
            name={feature.name}
            checked={features[feature.name] || false}
            onChange={onChange}
          />
          <label htmlFor={feature.name} >{feature.label}</label>
        </div>
      ))}
    </div>
    </>
  );
}
