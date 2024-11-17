import "../css/SwitchButton.css";

interface Props {
  setMapSwitch: (tab: boolean) => void;
  mapSwitch: boolean;
}

function SwitchButton ({ setMapSwitch, mapSwitch }: Props) {
  return (
    <div className="switch-button">
      <button onClick={() => setMapSwitch(!mapSwitch)}>
        {mapSwitch ? "Switch to Globe" : "Switch to Map"}
      </button>
    </div>
  );
}

export default SwitchButton;