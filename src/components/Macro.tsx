import InfoBlock from "./content/InfoBlock.tsx";
import FourBlock from "./content/FourBlock.tsx";
import Image from "./content/Image.tsx";
import QuoteBlock from "./content/QuoteBlock.tsx";
import StatBlock from "./content/StatBlock.tsx";
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
                       <GeneralSwitch state1={"Disaster"} state2={"Conflict"} right={true}
                                      children1={<Image source={"macro/pd/PDMA 3 IDPs disaster breakdown 2023. (Author's Own).webp"}/>}
                                      children2={<Image source={"macro/pd/PDMA 2 IDPs conflict breakdown 2023. (Author's Own).webp"}/>} />
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
        
        <StatBlock title={"Internal Displacement and IDPs in 2023"}
                   stat1={<>
                       <h1> 20.5m </h1>
                       <p>Internal Displacements by Conflict Over the Duration of 2023<sup>14</sup></p></>}
                   stat2={<>
                       <h1> 26.4m </h1>
                       <p>Internal Displacements by Disaster Over the Duration of 2023<sup>15</sup></p></>}
                   stat3={<>
                       <h1> +6% </h1>
                       <p>Increase in Total IDPs in Comparison to 2022<sup>16</sup></p></>}
        />

        <FourBlock>
            <div>
                <div className={"top"}>
                    <ul>
                        <li>
                        <strong>The Americas</strong><br/><br/>
                        </li>
                        <li>16.2 million displacements</li>
                        <li>9.9 million refugees</li>
                        <li>6.3 million internally displaced<sup>7</sup></li>
                    </ul>
                </div>
                <Image source={"macro/pd/PDMA 4 The Americas graphic. (Author's Own).webp"} size={"15rem"}/>
                <p>
                    Displacement in The Americas is primarily driven
                    by socio-political instability, violence, and economic
                    emergencies. In South America, over 7.7 million
                    Venezuelans have fled economic collapse and political
                    turmoil11, with Colombia, Peru, and Brazil hosting large
                    numbers. In Central America and Mexico, high levels
                    of violence, poverty, and climate-related disasters
                    lead thousands to seek asylum in the United States
                    and Canada. Internally, the United States and Canada
                    also face periodic displacements due to disasters
                    such as hurricanes and wildfires.
                </p>
            </div>
            <div>
                <div className={"top"}>
                    <ul>
                        <li>
                            <strong>Europe</strong><br/><br/>
                        </li>
                        <li>13.4 million displacements</li>
                        <li>7 million refugees</li>
                        <li>6.4 million internally displaced<sup>8</sup></li>
                    </ul>
                </div>
                <Image source={"macro/pd/PDMA 5 Europe graphic. (Author's Own).webp"} size={"15rem"}/>
                <p>
                    Europe’s largest displacement crisis is due to the
                    ongoing conflict in Ukraine, where approximately 1/3
                    of Ukrainians have been forced to flee their home12.
                    Europe is also a primary destination for refugees from
                    the Middle East and Africa. Countries like Germany,
                    France, and Turkey host large refugee populations,
                    creating ongoing social, economic, and political
                    challenges across the continent. In addition to
                    conflict-driven displacement, Europe faces periodical
                    natural disasters such as severe flooding and wildfires,
                    as well as rising sea levels becoming a threat to
                    lowlying nations such as The Netherlands.
                </p>
            </div>
            <div>
                <div className={"top"}>
                    <ul>
                        <li>
                            <strong>Africa</strong><br/><br/>
                        </li>
                        <li>43 million displacements</li>
                        <li>10.4 millions refugees</li>
                        <li>32.6 million internally displaced<sup>9</sup></li>
                    </ul>
                </div>
                <Image source={"macro/pd/PDMA 6 Africa graphic. (Author's Own).webp"} size={"15rem"}/>
                <p>
                    Africa has some of the world’s highest displacement
                    numbers. In East and Central Africa, countries like
                    Sudan, Ethiopia, and the Democratic Republic of
                    Congo have millions of internally displaced people due
                    to armed conflicts. The Sahel region is experiencing
                    increasing displacement as violence from militant
                    groups and climate impacts drive people from their
                    homes. Natural disasters exacerbate displacement
                    across the continent, with severe droughts in the Horn
                    of Africa increasing the risk of famine. Frequent flash
                    flooding is also a problem, where countries like Nigeria
                    and Mozambique have faced the repercussions of
                    late.
                </p>
            </div>
            <div>
                <div className={"top"}>
                    <ul>
                        <li>
                            <strong>Middle East, Asia, and Oceania</strong><br/><br/>
                        </li>
                        <li>44.4 million displacements</li>
                        <li>22.6 million refugees</li>
                        <li>23 million internally displaced<sup>10</sup></li>
                    </ul>
                </div>
                <Image source={"macro/pd/PDMA 7 The Middle East, Asia, and Oceania graphic. (Author's Own).webp"} size={"15rem"}/>
                <p>
                    The Middle East has been a focal point of displacement
                    due to several countries such as Palestine, Israel,
                    and Syria in consistent conflict. Asia is significantly
                    impacted by disaster and conflict displacement.
                    The Rohingya crisis has resulted in almost 1 million
                    refugees fleeing to Bangladesh from Myanmar13.
                    Countries like the Philippines and Bangaldesh face
                    high internal displacement due to natural disasters
                    such as typhoons and cyclones. In Oceania, island
                    nations such as Kiribati and Tuvalu face growing
                    risks from rising sea levels, while Australia and New
                    Zealand face the threat of wildfires.
                </p>
            </div>
        </FourBlock>
        
        <StatBlock title={"Internal Displacement and IDPs in 2023"}
                   stat1={<>
                       <h1> 20.5m </h1>
                       <p>Internal Displacements by Conflict Over the Duration of 2023<sup>14</sup></p></>}
                   stat2={<>
                       <h1> 26.4m </h1>
                       <p>Internal Displacements by Disaster Over the Duration of 2023<sup>15</sup></p></>}
                   stat3={<>
                       <h1> +6% </h1>
                       <p>Increase in Total IDPs in Comparison to 2022<sup>16</sup></p></>}
        />

        <InfoBlock title={""} span={[40, 50]}
                   image_child={<Image source={"macro/pd/PDMA 21 Total number of IDPs per year over the last decade. (Author's Own).webp"} size={"20rem"}/>}
                   >
            <p>In recent years, the majority of forcibly displaced people have remained within their own country’s borders. The
                number of IDPs continues to rise annually as more people are forced to flee their communities, contributing to the
                growing population of those who have been displaced for years or even decades without finding a lasting solution.
                At the end of 2023, and across 116 countries, there was 76 million IDPs.<sup>17</sup></p>
            <p>Between 2014 and 2018, the number of IDPs globally increased by almost 10%. However, between 2018 and the
                end of 2023, this percentage drastically increased to 83%. Overall, between 2014 and 2023 the number of IDPs has
                increased by a staggering 101%.<sup>18</sup></p>
            <p>Throughout 2023, new escalations of conflict in places like Ukraine, Sudan, and Palestine forcibly displaced millions
                of people, adding to the millions already displaced by ongoing or previous conflicts. Additionally, prevalent natural
                disasters destroyed numerous homes, resulting in even more people remaining displaced by year’s end. Without
                lasting solutions, these numbers are likely to keep rising.</p>
            <Image source={"macro/pd/PDMA 20 Types of internal displaced people graphic. (Author's Own).webp"} size={"10rem"}/>
        </InfoBlock>
    </div>
  );
}

export default Macro;