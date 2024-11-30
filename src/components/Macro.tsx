import InfoBlock from "./content/InfoBlock.tsx";
import QuoteBlock from "./content/QuoteBlock.tsx";
import GeneralSwitch from "./control/GeneralSwitch.tsx";

function Macro () {
  return (
    <div className={'macro-content'}>
        <InfoBlock title={"What is Displacement?"} span={[40, 50]} id={"Physical Displacement"}
                   image_src={"macro/pd/PDMA 1 Displacement figures 2000-2004. (Author's Own).webp"}>
            <p>
                Displacement is a term used to refer to the forced movement of people from their homes as a result of
                circumstances
                that are beyond their control. As of the middle of 2024, 122.6 million people have been displaced
                worldwide1
                . This number has increased by 222% since the turn of the millennium where just over 38 million people
                were globally displaced2
                . While the number of people affected can fluctuate, the overarching statistical trends inform us that
                this
                number is continuing to rise with no sign of slowing.
            </p>
            <p>
                Personnel facing the repercussions of displacement can be categorised as:
            </p>
            <p><strong>
                Internally Displaced People (IDPs)
            </strong></p>
            <p><i>
                An internally displaced person is someone who is forced to leave their home but who remains within their
                country’s
                borders.
            </i></p>
            <p><strong>
                Refugee
            </strong></p>
            <p><i>
                A person who has been forced to leave their country in order to escape war, persecution, or natural disaster.
            </i></p>
            <p><strong>
                Asylum Seeker
            </strong></p>
            <p><i>
                An asylum seeker is a person who leaves their country of residence, enters another country, and makes in that other
                country a formal application for the right of asylum.
            </i></p>
            <p>
                Displacement is at an historic high, affecting nearly every region and demographic globally in some shape or
                form. This creates an urgent humanitarian need as well as complex social, economic, and political challenges. This
                section aims to provide an overview of global displacement by highlighting the underlying causes and the current
                trends shaping the lives of millions of displaced individuals.
            </p>
        </InfoBlock>

        <QuoteBlock source={"United Nations High Commissioner for Refugees"}>
            <p>
                <strong> One in 69 </strong> people globally or 1.5 per cent of the entire world’s population was
                forcibly displaced,<strong> nearly double </strong>the one in 125 people a decade ago.<sub>3</sub>
            </p>
        </QuoteBlock>

        <GeneralSwitch state1={"help"} state2={"ahhhhh"} children1={<div>help</div>} children2={<div>ahhhh</div>} />
    </div>
  );
}

export default Macro;