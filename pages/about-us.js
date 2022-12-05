import React from "react";
/* import SeoHeadTags from "../components/SeoHeadTags";
import { seo } from "../usefulSeo"; */
import { RiFlashlightLine } from "react-icons/ri";
import SeoHeadTags from "../components/SeoHeadTags";
import { seo } from "../usefulSEO";

const About = () => {
  return (
    <>
      <SeoHeadTags
        title={seo.about.title}
        Url={seo.about.cenonicalUrl}
        description={seo.about.description}
        keyword={seo.about.keyword}
      />
      <div className="px-2 pt-16 lg:pt-24 md:px-4 lg:px-8">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="py-5 text-2xl font-bold md:text-4xl text-navColor">
            Know how we grown in last 20 years
          </h1>

          <div className="w-full lg:px-56">
            <p className="py-3 text-justify text-gray-700 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              hic dolorum expedita soluta veritatis laborum obcaecati delectus
              impedit? Praesentium qui nihil ipsa. Deleniti, molestias minus
              adipisci dolores praesentium, iste odit explicabo possimus ratione
              iusto facilis? Officia, at voluptates. Officia minima pariatur,
              corporis quam animi aut consequatur assumenda. Sequi corrupti ea
              doloremque facilis eaque laborum porro assumenda soluta, adipisci
              qui totam! Magni officiis ducimus nam a doloribus, non placeat
              dolore voluptatum temporibus aspernatur nemo ad provident
              pariatur, perspiciatis quidem voluptas quis ipsa alias eius, sit
              delectus cumque et. Harum hic odit distinctio aut cumque numquam
              quisquam? Perferendis alias molestiae autem dignissimos eum?
              Obcaecati quis aperiam non reiciendis voluptates nesciunt eum fuga
              molestiae, itaque beatae quae perferendis, eveniet ullam nostrum
              cum laboriosam est. Impedit omnis alias corporis doloribus odit,
              cupiditate excepturi quo eaque aliquid doloremque illum assumenda
              dolore exercitationem quia unde tenetur, vel laboriosam
              necessitatibus, temporibus pariatur nulla! Quia voluptatibus, modi
              illo laboriosam labore doloremque repellendus nam, culpa
              reiciendis, at cumque praesentium ipsum saepe facere velit
              doloribus quos ipsam. Temporibus, minus suscipit provident error
              illum, tenetur atque odio quos rem doloribus magnam odit enim
              quisquam impedit nam magni autem facere asperiores! Neque earum
              accusantium nisi vel? Ut quae dolorem eum repellendus autem.
            </p>
            <div className="mt-10 ">
              <div className="space-y-6 ">
                <h1 className="text-xl font-bold text-gray-800 ">Top trends</h1>
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="  h-[27rem] w-full rounded-2xl "
                />
              </div>
              <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2">
                <div className="flex space-x-3 ">
                  <div className="flex items-center justify-center px-3 bg-blue-100 rounded-full h-14">
                    <RiFlashlightLine className="text-3xl text-gray-700 " />
                  </div>
                  <div>
                    <h1 className="pt-2 pb-3 text-xl font-bold text-gray-800 ">
                      The deep ocean
                    </h1>
                    <p className="text-sm text-justify text-gray-800 ">
                      A flower in my garden , a mystery in my panties. Heart
                      attack never stopped old Big Bear. I didn &#39 t even know
                      we were calling him Big Bear. We never had the chance to.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-3 ">
                  <div className="flex items-center justify-center px-3 bg-blue-100 rounded-full h-14">
                    <RiFlashlightLine className="text-3xl text-gray-700 " />
                  </div>
                  <div>
                    <h1 className="pt-2 pb-3 text-xl font-bold text-gray-800 ">
                      When has justice
                    </h1>
                    <p className="text-sm text-justify text-gray-800 ">
                      Rough pomfret lemon shark plownose chimaera southern
                      sandfish kokanee northern sea robin Antarctic cod.
                      Yellow-and-black triplefin gulper South American Lungfish
                      mahi-mahi, butterflyfish glass catfish soapfish ling gray
                      mullet!
                    </p>
                  </div>
                </div>
                <div className="flex space-x-3 ">
                  <div className="flex items-center justify-center px-3 bg-blue-100 rounded-full h-14">
                    <RiFlashlightLine className="text-3xl text-gray-700 " />
                  </div>
                  <div>
                    <h1 className="pt-2 pb-3 text-xl font-bold text-gray-800 ">
                      Organically grow
                    </h1>
                    <p className="text-sm text-justify text-gray-800 ">
                      A slice of heaven. O for awesome, this chocka full cuzzie
                      is as rip-off as a cracker. Meanwhile, in behind the
                      bicycle shed, Hercules Morse, as big as a horse and Mrs
                      Falani were up to no good with a bunch of crook pikelets.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-3 ">
                  <div className="flex items-center justify-center px-3 bg-blue-100 rounded-full h-14">
                    <RiFlashlightLine className="text-3xl text-gray-700 " />
                  </div>
                  <div>
                    <h1 className="pt-2 pb-3 text-xl font-bold text-gray-800 ">
                      A slice of heaven
                    </h1>
                    <p className="text-sm text-justify text-gray-800 ">
                      Disrupt inspire and think tank, social entrepreneur but
                      preliminary thinking think tank compelling. Inspiring,
                      invest synergy capacity building, white paper; silo,
                      unprecedented challenge B-corp problem-solvers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10 pb-20 ">
              <div className="space-y-6 ">
                <h1 className="text-xl font-bold text-gray-800 ">
                  Produced with care
                </h1>
                <img
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="  h-[27rem] w-full rounded-2xl "
                  alt=""
                />
              </div>
              <p className="py-3 text-gray-700 ">
                Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
                sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
                eget pellentesque risus scelerisque a. Nam ac urna maximus,
                tempor magna et, placerat urna. Curabitur eu magna enim. Proin
                placerat tortor lacus, ac sodales lectus placerat quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
