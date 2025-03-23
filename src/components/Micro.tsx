import BlockRenderer from "./control/BlockRenderer.tsx";

function Micro () {
  return (
    <div className={'micro-content'}>
      <BlockRenderer blockPath={"blocks/micro/"} />
    </div>
  );
}

export default Micro;