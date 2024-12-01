import CaseStudyTemplate from "./CaseStudyTemplate.tsx";
import InfoBlock from "./InfoBlock.tsx";
import Image from "./Image.tsx";

function CongoCaseStudy() {
    return (
        <CaseStudyTemplate
            child1={
            <InfoBlock title={"Democratic Republic of Congo"} span={[60, 30]} columns={2}
                       image_child={ <Image source={"macro/pd/PDMA 27 Regional map of DRC highlighting most affected conflict areas. (Author's Own).wbp"} />} >
                <div>
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
            child2={<div>Child 2</div>}
            child3={<div>Child 3</div>}
            child4={<div>Child 4</div>}
            child5={<div>Child 5</div>}
        />
    );
}

export default CongoCaseStudy;