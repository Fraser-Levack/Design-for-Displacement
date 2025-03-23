import BlockRenderer from "./control/BlockRenderer.tsx";

function Macro () {
  return (
      <div className={'macro-content'}>
          <BlockRenderer blockPath={"blocks/macro/"} />
      </div>
  );
}

export default Macro;