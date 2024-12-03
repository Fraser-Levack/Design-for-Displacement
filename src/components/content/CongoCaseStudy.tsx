import CaseStudyTemplate from "./CaseStudyTemplate.tsx";
import InfoBlock from "./InfoBlock.tsx";
import FourStat from "./FourStat.tsx";
import QuoteBlock from "./QuoteBlock.tsx";
import Image from "./Image.tsx";


function CongoCaseStudy() {
    return (
        <CaseStudyTemplate
            child1={
            <InfoBlock title={"Democratic Republic of Congo"} span={[60, 30]} columns={2}
                       image_child={ <Image source={"macro/pd/PDMA 27 Regional map of DRC highlighting most affected conflict areas. (Author's Own).webp"}
                       lightText={true} size={"18rem"}/>} >
                <div>
                    <ul>
                        <li></li>
                        <li><strong>Population:</strong>&emsp;109,276,265</li>
                        <li><strong>Area:</strong>&emsp;905,355 sq. miles</li>
                        <li><strong>Density:</strong>&emsp;22.3 people per sq. mile </li>
                        <li><strong>Region:</strong>&emsp;Central Africa</li>
                        <li><strong>Event:</strong>&emsp;Prolonged Conflict</li>
                    </ul>
                    <br/><br/>
                    <strong> Displacement Overview </strong>
                    <p>
                        The primary drivers of displacement in the Democratic Republic of
                        Congo (DRC) are the ongoing violent conflicts between armed groups
                        and the DRC military, with regional tensions also adding to instability.
                        Clashes between government forces and groups such as the M23
                        rebels and various militia factions have led millions to flee their homes
                        in recent years. These groups often target members of the public. Their
                        acts of violence are fuelled by competition over natural resources and
                        land which attracts foreign involvement and financing of these conflicts.
                        The complexity of this conflict has only intensified due to geopolitical
                        interest from nations such as China and Rwanda, further aggravating the
                        displacement of people as armed groups seek control over mining areas
                        and trades routes. </p>
                </div>
                <div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <p>
                        Humanitarian issues stemming from the extreme poverty and inadequate
                        infrastructure compound the displacement situation. Those affected face
                        dire conditions in overcrowded camps where there is limited access
                        to clean water, sanitation, and healthcare. Epidemics of disease are
                        common due to poor hygiene and lack of medical facilities in these
                        camps. Food security is also severe, with nearly 23 million people
                        struggling for food25. This situation is worsened by the displacement
                        of rural communities from their farmlands, obstructing their access to
                        sustenance. The eastern provinces of North Kivu, South Kivu, Ituri, and
                        Tanganyika are the worst affected by the conflict, with communities
                        experiencing severe violence from armed groups, inter-ethnic conflicts,
                        and frequent disease outbreaks. This cycle of conflict, poverty, and lack
                        of basic services has led the DRC to one of Africa’s longest-standing
                        humanitarian crises.
                    </p>

                </div>
            </InfoBlock>
                }
            child2={
                <FourStat
                           stat1={<>
                               <h1> 6.9m </h1>
                               <p>Internal Displacements from Conflict in 2023<sup>26</sup></p></>}
                           stat2={<>
                               <h1> 120 </h1>
                               <p>Armed Groups Active in Highlighted Provinces<sup>27</sup></p></>}
                           stat3={<>
                               <h1> 92% </h1>
                               <p>Of All Internal Displacements in Highlighted Regions<sup>28</sup></p></>}
                           stat4={<>
                           <h1> 277% </h1>
                           <p>Conflict Internal Displacements Increase Since 2014<sup>29</sup></p></>}
                />
            }
            child3={
            <Image source={"macro/pd/PDMA Congo time line.webp"} figcaption={false}/>}
            child4={
                <QuoteBlock source={"United Nations Office for the Coordination of Humanitarian Affairs"} lightText={true}>
                    <p>
                        The people of the Democratic Republic of the Congo are paying too high a price, due to an
                        unabating armed conflict, particularly in the eastern part of the country. This situation has
                        been alarmingly worsening since 2023,<strong> transforming the country’s protection crisis into
                        one of the gravest worldwide.</strong> <sup>31</sup>
                    </p>
                </QuoteBlock>
                }
            child5={
                <InfoBlock span={[60, 30]} columns={2}
                           image_child={ <>
                               <strong> Conclusion </strong>
                               <p> The displacement crisis in the DRC remains a persistent and complicated
                                   challenge. The government’s limited capacity, insecurity, and a lack of resources
                                   hinder effective responses at each stage. Displaced populations continue
                                   to face poor conditions in camps with few opportunities to return home or
                                   resettle. Durable solutions will only become available once peacebuilding is
                                   carried out from stronger governance and sustained international aid. </p>
                               <Image source={"macro/pd/PDMA 27 Regional map of DRC highlighting most affected conflict areas. (Author's Own).webp"}
                                                lightText={true} size={"15rem"}/></>} >
                    <div>
                        <strong> Planning </strong>
                        <p>
                            The DRC’s planning response to displacement caused by conflict
                            faces significant challenges. The government has struggled to prepare
                            adequately due to limited resources where conflict is most severe. The
                            government’s response to displacement tends to be reactive as opposed
                            to anticipatory, leading to delays in addressing the needs of displaced
                            populations. The regions prone to conflict lack infrastructure to prepare
                            for the large-scale movement of people. While international organisations
                            suck as the UNCHR, International Organisation for Migration, and other
                            non-govermnental organisations (NGOs) provide valuable support, they
                            can only partially alleviate the challenges of managing displacement. The
                            government’s limited control over many conflict zones further complicates
                            the ability to effectively plan for displacement, thus leaving large swathes
                            of the population vulnerable. </p>
                        <strong> Emergency Response </strong>
                        <p>
                            International aid from NGOs play a crucial role in providing immediate relief
                            to those fleeing conflict. Emergency interventions are primarily focussed
                            on providing shelter, food, water, and medical care. For example, in 2023,
                            widespread displacement in the eastern regions saw rapid deployment
                            of aid which included mobile clinics from organisations such as Doctors
                            Without Borders. Organisations like these assist in injuries from the conflict
                            as well as the outbreak of diseases in overcrowded camps.
                            However, responding to displacement in such unstable areas is fraught
                            with difficulties. Humanitarians workers often face violent resistance from
                            armed groups and severe logistical challenges which delays the delivery
                            of aid and limit its reach. </p>
                    </div>
                    <div>

                        <strong> Temporary Response </strong>
                        <p>
                            As displacement numbers grew, many people were forced to seek refuge
                            in temporary camps in dire conditions. These camps, often found in urban
                            areas like the city of Goma, became overwhelmed with far more people
                            than can be supported. This situation leads to overcrowding, inadequate
                            shelter, and a lack of access to sanitation and healthcare. The sheer
                            scale of displacement outpaces the available resources. In many cases,
                            temporary camps have turned into long-term settlements due to the
                            persistent insecurity and destruction of the original communities, making
                            returning home an impossibility. The displacement situation in the DRC
                            therefore stretches far beyond short-term solutions. </p>
                        <strong> Permanent Response </strong>
                        <p>
                            Achieving a lasting solution to the displacement seen in the DRC remains
                            elusive. Ongoing insecurity in displaced personnel’s home regions making
                            the possibility of returning unlikely. Some NGOs attempt to facilitate
                            resettlement or reintegration into relatively safer areas, but, these efforts
                            have the tendency to fall short because of limited funding and the inability
                            to address the roots causes. Many displacement camps are continuing to
                            operate as semi-permanent settlements even with their initial intention to
                            be temporary. Sustainable solutions like reintegration or voluntary return
                            require the establishment of long-term peace and stability. Peacebuilding
                            efforts are complicated by the DRC’s complex internal conflicts, which
                            involve numerous armed factions with differing interests. Without
                            comprehensive approaches to address the underlying causes, this cycle
                            of relief will continue indefinitely. </p>

                    </div>
                </InfoBlock>
            }
        />
    );
}

export default CongoCaseStudy;