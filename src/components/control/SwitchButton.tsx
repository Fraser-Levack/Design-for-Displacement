import "../../css/control/SwitchButton.css";

interface Props {
  setMapSwitch: (tab: boolean) => void;
  mapSwitch: boolean;
}

function SwitchButton ({ setMapSwitch, mapSwitch }: Props) {
  return (
    <div className={"switch-content"}>
      <div className={"switch-button"} onClick={() => setMapSwitch(!mapSwitch)}>
          <div className={`switch-circle ${mapSwitch ? "active" : ""}`}/>
      </div>
        <div className={"switch-text"}>
            {mapSwitch ? "Switch to Globe" : "Switch to Map"}
      </div>
    </div>
  );
}

export default SwitchButton;