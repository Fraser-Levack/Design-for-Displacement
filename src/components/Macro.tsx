import InfoBlock from "./content/InfoBlock.tsx";
import Image from "./content/Image.tsx";
import QuoteBlock from "./content/QuoteBlock.tsx";
import GeneralSwitch from "./control/GeneralSwitch.tsx";

function Macro () {
  return (
    <div className={'macro-content'}>
        <InfoBlock title={"What is Displacement?"} span={[40, 50]} id={"Physical Displacement"}
                   image_child={<Image source={"macro/pd/PDMA 1 Displacement figures 2000-2004. (Author's Own).webp"}/>}>
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

        <InfoBlock title={"Causes of Displacement"} span={[40, 50]}
                   image_child={
                       <GeneralSwitch state1={"Disaster"} state2={"Conflict"}
                                      children1={<Image source={"macro/pd/PDMA 2 IDPs conflict breakdown 2023. (Author's Own).webp"}/>}
                                      children2={<Image source={"macro/pd/PDMA 3 IDPs disaster breakdown 2023. (Author's Own).webp"}/>} />
                   } >
            <p>
                Displacement occurs due to a variety of complex and interconnected factors that force individuals and communities
                to leave their homes.
            </p>
            <p>
                Conflict and violence are among the most significant drivers, with wars, civil unrest, and ethnic or political
                persecution leading to widespread displacement. Political instability can create hostile environments whereby
                people face a daily threat to their lives, safety, and freedom. Economic vulnerability and deep poverty can exacerbate
                displacement by leaving people with limited resources and opportunity. Furthermore, the ever increasing gap
                between the winners and losers of globalisation and capitalist regimes contributes to the displacement of people.
            </p>
            <p>
                Environmental factors, such as natural disasters, are also becoming more frequent and severe due to climate
                change. Floods, droughts, hurricanes, earthquakes, wildfires, rising sea levels, tsunamis, and landslides are some of
                the major geophysical and extreme weather events which disrupt entire communities. These lead to the destruction
                of homes and the devastation of livelihoods, making it impossible for people to stay in their places of origin.
            </p>
            <p>
                These diverse causes of displacement reflect the intricacy of a global issue which affects millions, highlighting a
                need for versatile approaches in understanding and addressing the realities of forced migration.
            </p>
        </InfoBlock>
        
        <GeneralSwitch state1={"help"} state2={"ahhhhh"} children1={<div>help</div>} children2={<div>ahhhh</div>} />
    </div>
  );
}

export default Macro;