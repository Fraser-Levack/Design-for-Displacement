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
                     image_child={<Image
                         source={"macro/pd/PDMA 1 Displacement figures 2000-2004. (Author's Own).webp"}/>}>
              <p>
                  Displacement is a term used to refer to the forced movement of people from their homes as a result of
                  circumstances
                  that are beyond their control. As of the middle of 2024, 122.6 million people have been displaced
                  worldwide<sup>1</sup>
                  . This number has increased by 222% since the turn of the millennium where just over 38 million people
                  were globally displaced<sup>2</sup>
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
                  An internally displaced person is someone who is forced to leave their home but who remains within
                  their
                  country’s
                  borders.
              </i></p>
              <p><strong>
                  Refugee
              </strong></p>
              <p><i>
                  A person who has been forced to leave their country in order to escape war, persecution, or natural
                  disaster.
              </i></p>
              <p><strong>
                  Asylum Seeker
              </strong></p>
              <p><i>
                  An asylum seeker is a person who leaves their country of residence, enters another country, and makes
                  in that other
                  country a formal application for the right of asylum.
              </i></p>
              <p>
                  Displacement is at an historic high, affecting nearly every region and demographic globally in some
                  shape or
                  form. This creates an urgent humanitarian need as well as complex social, economic, and political
                  challenges. This
                  section aims to provide an overview of global displacement by highlighting the underlying causes and
                  the current
                  trends shaping the lives of millions of displaced individuals.
              </p>
          </InfoBlock>

          <QuoteBlock source={"United Nations High Commissioner for Refugees"}>
              <p>
                  <strong> One in 69 </strong> people globally or 1.5 per cent of the entire world’s population was
                  forcibly displaced,<strong> nearly double </strong>the one in 125 people a decade ago.<sup>3</sup>
              </p>
          </QuoteBlock>

          <InfoBlock title={"Causes of Displacement"} span={[40, 50]}
                     image_child={
                         <GeneralSwitch state1={"Disaster"} state2={"Conflict"} right={true}
                                        children1={<Image
                                            source={"macro/pd/PDMA 3 IDPs disaster breakdown 2023. (Author's Own).webp"}/>}
                                        children2={<Image
                                            source={"macro/pd/PDMA 2 IDPs conflict breakdown 2023. (Author's Own).webp"}/>}/>
                     }>
              <p>
                  Displacement occurs due to a variety of complex and interconnected factors that force individuals and
                  communities
                  to leave their homes.
              </p>
              <p>
                  Conflict and violence are among the most significant drivers, with wars, civil unrest, and ethnic or
                  political
                  persecution leading to widespread displacement. Political instability can create hostile environments
                  whereby
                  people face a daily threat to their lives, safety, and freedom. Economic vulnerability and deep
                  poverty can exacerbate
                  displacement by leaving people with limited resources and opportunity. Furthermore, the ever
                  increasing gap
                  between the winners and losers of globalisation and capitalist regimes contributes to the displacement
                  of people.
              </p>
              <p>
                  Environmental factors, such as natural disasters, are also becoming more frequent and severe due to
                  climate
                  change. Floods, droughts, hurricanes, earthquakes, wildfires, rising sea levels, tsunamis, and
                  landslides are some of
                  the major geophysical and extreme weather events which disrupt entire communities. These lead to the
                  destruction
                  of homes and the devastation of livelihoods, making it impossible for people to stay in their places
                  of origin.
              </p>
              <p>
                  These diverse causes of displacement reflect the intricacy of a global issue which affects millions,
                  highlighting a
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
                  <Image source={"macro/pd/PDMA 7 The Middle East, Asia, and Oceania graphic. (Author's Own).webp"}
                         size={"15rem"}/>
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
                     image_child={<Image
                         source={"macro/pd/PDMA 21 Total number of IDPs per year over the last decade. (Author's Own).webp"}
                         size={"20rem"}/>}
          >
              <p>In recent years, the majority of forcibly displaced people have remained within their own country’s
                  borders. The
                  number of IDPs continues to rise annually as more people are forced to flee their communities,
                  contributing to the
                  growing population of those who have been displaced for years or even decades without finding a
                  lasting solution.
                  At the end of 2023, and across 116 countries, there was 76 million IDPs.<sup>17</sup></p>
              <p>Between 2014 and 2018, the number of IDPs globally increased by almost 10%. However, between 2018 and
                  the
                  end of 2023, this percentage drastically increased to 83%. Overall, between 2014 and 2023 the number
                  of IDPs has
                  increased by a staggering 101%.<sup>18</sup></p>
              <p>Throughout 2023, new escalations of conflict in places like Ukraine, Sudan, and Palestine forcibly
                  displaced millions
                  of people, adding to the millions already displaced by ongoing or previous conflicts. Additionally,
                  prevalent natural
                  disasters destroyed numerous homes, resulting in even more people remaining displaced by year’s end.
                  Without
                  lasting solutions, these numbers are likely to keep rising.</p>
              <Image source={"macro/pd/PDMA 20 Types of internal displaced people graphic. (Author's Own).webp"}
                     size={"10rem"}/>
          </InfoBlock>
          <br/><br/><br/>
          <GeneralSwitch

              children1={
                  <InfoBlock title={"Disaster IDPs 2023"} span={[30, 60]}
                             image_child={<Image
                                 source={"macro/pd/PDMA 24 Global IDPs by disaster map 2023. (Author's Own).webp"}/>}
                             flip={true}>
                      <p>
                          Disaster displacement occurred in 148 countries in 2023<sup>20</sup>. Geophysical events
                          such as earthquakes and volcanic eruptions led to as many displacements
                          in 2023 as they had in the previous seven years. In 2022, weather induced
                          displacement figures recorded their highest figure, but in 2023 this figure
                          dropped, influenced by the settling of the La Nina period.
                      </p>
                      <p>
                          Contrarily, floods and storms were responsible for the most displacements
                          over the course of the year. Additionally, wildfires and droughts have increasingly entered
                          the frame. Disasters related to weather aren’t always the direct
                          result of climate change, but the recent environmental shift is increasing the
                          frequency and intensity of them. This simultaneously poses greater threat to
                          susceptible communities and makes the need to combat underlying drivers
                          more necessary.
                      </p>
                      <Image source={"macro/pd/PDMA 25 Internal displacement breakdown 2014-2023. (Author's Own).webp"}
                             size={"15rem"}/>
                  </InfoBlock>
              }

              children2={
                  <InfoBlock title={"Conflict IDPs 2023"} span={[30, 60]}
                             image_child={<Image
                                 source={"macro/pd/PDMA 22 Global IDPs by conflict map 2023. (Author's Own).webp"}/>}
                             flip={true}>
                      <p>
                          The global number of internally displaced people due to conflict continues to
                          rise, reaching a record high of 68.3 million in 2023<sup>19</sup>. The highest number of
                          internal displacements related to conflict spiked in 2022 but remained high
                          in 2023.
                      </p>
                      <p>
                          However, yearly figures can often be unrepresentative as they only capture
                          a portion of the issue. Most conflicts persist over long periods of time and
                          even when conflict subsides or are resolved the damaging effects prolong.
                          Whether this is physical infrastructural damage or political fragility, these
                          consequences of previous acts can leave people displaced for years to come.
                          The reasons for people moving often varies vastly with conflict being an ever
                          changing scenario. It can result in people to move more than once in their
                          search for safety.
                      </p>
                      <Image
                          source={"macro/pd/PDMA 23 Number of internal displacements from conflict 2014-2023. (Author's Own).webp"}
                          size={"15rem"}/>
                  </InfoBlock>
              }

              state1={"Disater"} state2={"Conflict"}/>

          <InfoBlock title={"Conflict Internal Displacements 2023"} span={[30, 60]}
                     image_child={<Image
                         source={"macro/pd/PDMA 26 Global internal displacements by conflict map 2023. (Author's Own).webp"}/>}
                     flip={true}>
              <p>
                  In 2023, conflict and violence caused five countries to report the highest
                  figures for internal displacements. Sudan topped the list with over 6
                  million people displaced, this figure is the second-highest displacement
                  count ever recorded for a single country in a year<sup>21</sup>, following Ukraine’s
                  record in 2022. Palestine recorded 3.4 million displacements, the highest
                  it has ever reported since 2008<sup>22</sup>, highlighting the severe impact of
                  escalating tensions on the population. The Democratic Republic of the
                  Congo followed, along with Myanmar, seeing over a million displaced<sup>23</sup>.
                  Ethiopia also faced significant internal displacement, with 794,000 people
                  affected<sup>24</sup>. When these figures are considered relative to each country’s
                  population, the impact becomes even more severe, especially as Palestine
                  and Sudan’s displacements form a substantial portion of its population.
              </p>
              <p>
                  Displacement clusters on the map highlight Africa, the Middle East,
                  Eastern Europe, Southeast Asia, and Central America as regions
                  facing severe instability. In Africa, countries like Sudan, the Democratic
                  Republic of the Congo, and Ethiopia experience massive displacement
                  that spills over borders, impacting neighbouring countries and
                  complicating humanitarian efforts. The Middle East sees prolonged
                  displacement in Palestine and Syria, where political conflicts affect
                  nearby countries like Jordan and Lebanon, creating regional pressures.
              </p>
              <p>
                  In Eastern Europe, the Ukraine crisis has led to record displacement,
                  both internally and across European borders. Similarly, in Southeast
                  Asia, Myanmar’s ongoing conflict has led to displacement,
                  impacting neighbouring countries like Thailand and Bangladesh.
              </p>
              <p>
                  These regions form an arc from East Africa through the Middle East to
                  Eastern Europe and Southeast Asia, showing interconnected crises where
                  displacement flows often impact bordering nations.
              </p>
          </InfoBlock>

          <InfoBlock title={"Disaster Internal Displacements 2023"} span={[30, 60]}
                     image_child={<Image
                         source={"macro/pd/PDMA 29 Global internal displacements by disaster map 2023. (Author's Own).webp"}/>}
                     flip={true}>
              <p>
                  In 2023, natural disasters were responsible for the highest figures of internal
                  displacements globally. China reported 4.7 million displacements, largely
                  due to severe weather events and floods that displaced communities and
                  disrupted infrastructure32. Türkiye followed closely, driven primarily by
                  earthquakes, marking the highest displacement due to earthquakes since
                  2008<sup>33</sup>. The Philippines recorded 2.5 million displacements, largely from
                  typhoons and heavy rains, while Somalia and Bangladesh saw 2.1 million
                  and 1.7 million displacements respectively due to extreme flooding<sup>34</sup>
              </p>
              <p>
                  The map depicts the majority of displacement clusters emerge in East
                  and Southeast Asia, the Middle East, and the Horn region of Africa, areas
                  highly vulnerable to natural disasters due to their geographical location
                  between the tropics of Cancer and Capricorn. In East Asia, China faced
                  immense flooding and weather extremes, which not only displaced
                  millions internally but also impacted agricultural regions that effected food
                  supply chains. In Southeast Asia, the Philippines and Bangladesh suffered
                  repeated cyclones and heavy rainfall, driving high levels of displacement
                  in densely populated areas with limited resources. In the Horn of Africa
                  displacement crisis from flooding follows years of drought, showing how
                  extreme weather cycles strain already vulnerable communities. This
                  concentration of displacement highlights the intense and increasing
                  impact of climate-related and geophysical disasters across these regions.
              </p>
              <p>
                  These clusters form a pattern from East Asia, through the Middle East and
                  Southeast Asia, to the Horn of Africa, underscoring a global crisis in disasterinduced displacement that impacts not only the directly affected countries
                  but also their neighbours. Addressing these challenges calls for coordinated
                  international action to improve disaster preparedness, resilience, and
                  response to support immediate and long-term recovery.
              </p>
          </InfoBlock>
          
          <StatBlock title={"Rural to Urban Migration"}
                     stat1={<>
                         <h1> 60% </h1>
                         <p>Of All Refugees Live in Urban Areas<sup>43</sup></p></>}
                     stat2={<>
                         <h1> 80% </h1>
                         <p>Of All IDPs Live in Urban Areas<sup>44</sup></p></>}
                     stat3={<>
                         <h1> 68% </h1>
                         <p>Of World Population Predicted to Live in Urban Areas by 2050<sup>45</sup></p></>}
                     />

          <InfoBlock title={"What is Rural to Urban Migration and How Does Displacement Come into Play?"} span={[40, 50]}
                     image_child={<Image
                         source={"macro/pd/PDMA 32 Urban and rural population projections to 2050. (Author's Own).webp"}/>}>
              <p>
                  Rural to urban migration refers to the movement of people from rural areas to cities, and this trend has been on
                  the rise for several years. These migration patterns are driven by factors like economic opportunities, education,
                  and healthcare centres which are readily accessible in urban areas. Unlike displacement, this process is often
                  voluntary, driven by the pursuit of greater employment opportunities and higher incomes.
              </p>
              <p>
                  The UN recently reported that 55% of the world’s population currently lives in urban areas46. This figure is anticipated
                  to rise to 68% by 2050. Population growth and increasing urbanisation are the reasons behind this increase. It’s
                  been reported that as much as 90% of this increase will take place in Africa and Asia.47
              </p>
              <p>
                  There is the potential for the number of people living in cities to become amplified by the number of displaced
                  people who are also moving to cities in the search of livelihood and away from conflict-stricken zones or areas
                  prone to natural disasters. Those facing displacement are increasingly moving to cities for primarily safety and
                  security, with the long-term goal of beginning a new livelihood to avoid camps which lack these opportunities.
                  Much like those moving voluntarily to cities, the access to services and better infrastructure is a major pull factor
                  for both demographics
              </p>
              <p>
                  As cities evolve to meet the changing needs of their populations, delivering services at a scale in appropriate time
                  becomes more challenging, emphasising the need for innovative solutions. Urbanisation brings diverse forms of
                  growth in which the boundaries between formal neighbourhoods and self-established informal settlements such
                  as slums, are becoming increasingly indistinct.
              </p>
          </InfoBlock>

          <InfoBlock title={"What Does This Mean for the Future?"} span={[40, 50]}
                     image_child={<Image
                         source={"macro/pd/PDMA 33 Aberdeen skyline graphic. (Author's Own).webp"}/>}>
              <p>
                  We need to reconsider how we categorise cities and the forcibly displaced populations within them. As cities
                  organically grow, they become places where people from a diverse range of backgrounds converge. Large-scale
                  migration to cities can then strain social cohesion, as locals and newcomers may face competition for limited
                  resources. Ethnic, racial, and sexual tensions can elevate and if not managed can lead to increased urban poverty,
                  crime, and social apprehension. It is then vital to conscientiously plan cities with an awareness of these factors.
              </p>
              <p>
                  Forcibly displaced populations also contribute to the shaping and enriching of the social fabric of a city. They serve
                  as a reminder that displaced people can positively impact host communities’ economies and as they adapt to their
                  surroundings they advocate for new social, legal, and spatial norms within cities. The influx of these demographics
                  in tandem may reshape urban economies, most notably in less economically developed countries. While a larger
                  labour force and consumer base becomes available, this can reduce the employment opportunities.
                  Cities may have to invest significantly more in becoming more resilient to accommodate displaced and rural
                  to urban migration populations. This will include enchaining their capacity through upgrades in infrastructure
                  and utilities such as water and sanitation systems to manage the increased demands brought by population
                  growth. Affordable housing initiatives can prevent overcrowded and informal settlements arising while promoting
                  sustainable and equitable urban growth.
              </p>
              <p>
                  Climate related displacement not only pushes populations toward cities but also emphasises the need for urban
                  centres to consider their own vulnerability to climate impacts and geophysical events. Climate adaptation strategies
                  such as integrating green infrastructure, rethinking water management, and using disaster resilient construction
                  methods will be critical for cities to protect both new and existing residents while minimising their environmental
                  strain
              </p>
              <p>
                  Prolonged conflict and the climate emergency is exacerbating pre-existing vulnerabilities within slums and camps,
                  trapping the poor and displaced in an unrelenting cycle of enduring hardship. A failure to take decisive action
                  will not only undermine the overall wellbeing of these groups, but also stifle the prospect of an inclusive and
                  prosperous future for all. This, coupled with an increasing cost of living, can lead to economic instability.
              </p>
          </InfoBlock>

          <QuoteBlock source={"Hans Park, United Nations High Commissioner for Refugees"}>
              <p>
                  There is little doubt that cities will have to be more innovative in how they address
                  the causes of climate change, social unrest, poverty, and other challenges.<strong> Truly
                  innovative solutions come from places that are diverse and where empathy,
                  readiness to change and openness are part of the culture</strong> – not merely a talking
                  point or something never acted upon.<sup> 49 </sup>
              </p>
          </QuoteBlock>

          <InfoBlock title={"The Future of Displacement"} span={[40, 50]}
                     image_child={<Image
                         source={"macro/pd/PDMA 34 London skyline graphic. (Author's Own).webp"}/>}>
              <p>
                  The future of displacement is likely to be shaped by a complex mix of persistent conflict and the accelerating
                  impact of climate change
              </p>
              <p>
                  As global temperatures rise, the extremity of climate based weather events are forecast to displace 1.2 billion
                  people by 2050 according to the Institute for Economics and Peace<sup>50</sup>, with regions prone to natural disasters
                  particularly vulnerable. Conflict-driven displacement - while difficult to predict - is also anticipated to continue as
                  political instability and unresolved tensions in many regions lead to prolonged crises and impede the safe return
                  of displaced people. Urbanisation, growing population pressures, and economic disparities has the potential to
                  exacerbate displacement trends.
              </p>
              <p>
                  Using data from sourced from the Internal Displacement Monitoring Centre, we have calculated that there could
                  be 817 million IDPs by 2050. This was projected exponentially using statistics from the last 10 years, showing the
                  potential immense number of IDPs if the trends remain at the current growth rate. This number doesn’t consider
                  the changes to our climate or political fragility, meaning this number could be even higher
              </p>
              <p>
                  This convergence of factors suggests that displacement will increasingly involve multiple, overlapping causes,
                  making it harder to address with traditional approaches. As a result, there is an urgent need for innovative and
                  coordinated global responses that address both immediate humanitarian needs and long-term resilience for
                  displaced populations.
              </p>
              <p>
                  Architecture and design will play a critical role in shaping these responses, particularly in the development of
                  sustainable housing and community structures that are adaptable, resilient to the effects of climate impacts
                  and natural disasters, and conducive to the social integration of displaced populations. Thoughtfully designed
                  spaces can help restore dignity, safety, and stability. In turn, this fosters a sense of belonging and cohesion that is
                  essential for the rebuilding of livelihood.
              </p>
          </InfoBlock>
          
          <Image source={"macro/pd/PDMA 35 Exponential projection of IDPs by 2050. (Author's Own).webp"} size={"30rem"}/>

          <br/><br/><br/>
          <QuoteBlock source={"Filippo Grandi, United Nations High Commissioner for Refugees"}>
              <p>
                  Behind these stark and rising numbers lie countless human tragedies. That suffering
                  must galvanise the international community to act urgently to tackle the root
                  causes of forced displacement.<sup> 51 </sup>
              </p>
          </QuoteBlock>

          <InfoBlock title={"Conclusions"} span={[60, 30]}>
              <strong>Conflict and Disaster Displacement</strong>
              <p>How can international systems better balance immediate humanitarian aid with long-term planning
                  solutions for displaced populations?</p>
              <br/>
              <strong>Climate Change</strong>
              <p>To what extent can climate adaptation strategies mitigate the displacement impacts of global
                  warming?</p>
              <br/>
              <strong>Prolonged Displacement</strong>
              <p>What approaches can be developed to address the root causes of protracted displacement?</p>
              <br/>
              <strong>Overcrowding and Strain on Cities</strong>
              <p>How can cities balance sustainable development with the influx and needs of displaced populations?</p>
              <br/>
              <strong>Global Action Needed</strong>
              <p>What role should global governance play in developing a unified approach to displacement?</p>
          </InfoBlock>
      </div>

  );
}

export default Macro;