import BlockRenderer from "./control/BlockRenderer.tsx";

function Meso () {
  return (
    <div className={'meso-content'}>
      <BlockRenderer blockPath={"blocks/meso/"} />
    </div>
  );
}

export default Meso;