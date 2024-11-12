import InfoBlock from "./InfoBlock.tsx";

import SlideShow from "./SlideShow.tsx";

function Macro () {
  return (
    <div className={'macro-content'}>
        <InfoBlock title={"Psychosocial Impact Macro"} span={[40, 50]} columns={2}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Gustaria
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </InfoBlock>

        <SlideShow folder={'sample_slideshow'} numImages={6}/>
    </div>
  );
}

export default Macro;