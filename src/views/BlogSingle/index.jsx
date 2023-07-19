import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import React from "react";
import { Link } from "react-router-dom";
import { lessData, tagData } from "../BlogPage/data";
import Tag from "../BlogPage/Tag";
import img1 from "../../assets/images/image_1.jpg";
import img2 from "../../assets/images/image_2.jpg";
import img3 from "../../assets/images/person_1.jpg";
import Comment from "../../components/Comment";
import Intro from "../../components/Intro";

const BlogPage = () => {
  return (
    <div className="w-full">
      <Intro name={'Blog Single'} className={'mb-24'} />
      <div className="blogPage max">

        <div>
          <img src={img1} alt="" />
          <h1 className="text-4xl text-[#000c] my-5">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </h1>

          <p className="p6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio
            perferendis et doloribus unde architecto optio laboriosam porro
            adipisci sapiente officiis nemo accusamus ad praesentium? Esse
            minima nisi et. Dolore perferendis, enim praesentium omnis, iste
            doloremque quia officia optio deserunt molestiae voluptates soluta
            architecto tempora.
          </p>

          <p className="p6">
            Molestiae cupiditate inventore animi, maxime sapiente optio, illo
            est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum
            magni reiciendis qui voluptate quisquam voluptatem soluta illo eum
            ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur
            dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima
            esse vero ut ea, repudiandae suscipit!
          </p>

          <h1 className="text-4xl text-[#000c] mt-8 mb-5">
            #2. Creative WordPress Themes
          </h1>
          <p className="p6">
            Temporibus ad error suscipit exercitationem hic molestiae totam
            obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora
            maiores ex architecto voluptatum aut officia doloremque. Error
            dolore voluptas, omnis molestias odio dignissimos culpa ex earum
            nisi consequatur quos odit quasi repellat qui officiis reiciendis
            incidunt hic non? Debitis commodi aut, adipisci.
          </p>

          <img src={img2} alt="" />
          <p className="p6">
            Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
            reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non
            tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab
            consectetur suscipit veritatis nulla quos quia aspernatur
            perferendis, libero sint. Error, velit, porro. Deserunt minus,
            quibusdam iste enim veniam, modi rem maiores.
          </p>
          <p className="p6">
            Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo
            velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur,
            ipsa vel nisi in dolorum consequatur, veritatis porro explicabo
            soluta commodi libero voluptatem similique id quidem? Blanditiis
            voluptates aperiam non magni. Reprehenderit nobis odit inventore,
            quia laboriosam harum excepturi ea.
          </p>
          <p className="p6">
            Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam
            quidem, dolor distinctio similique asperiores voluptas enim,
            exercitationem ratione aut adipisci modi quod quibusdam iusto,
            voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur
            totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis.
            Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!
          </p>
          <p className="p6">
            Voluptas dolores dignissimos dolorum temporibus, autem aliquam
            ducimus at officia adipisci quasi nemo a perspiciatis provident
            magni laboriosam repudiandae iure iusto commodi debitis est
            blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit.
            Error provident, pariatur cupiditate soluta doloremque aut ratione.
            Harum voluptates mollitia illo minus praesentium, rerum ipsa
            debitis, inventore?
          </p>

          <div className="flex gap-2 mb-8">
            <Tag name={"life"} />
            <Tag name={"sport"} />
            <Tag name={"tech"} />
            <Tag name={"travel"} />
          </div>

          <div className="bg-[#fafafa] flex gap-8 p-5">
            <img src={img3} alt="" className="w-[124px] h-[124px]" />
            <div>
              <h1 className="text-2xl mb-3">George Washington</h1>
              <p className="p6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus itaque, autem necessitatibus voluptate quod mollitia
                delectus aut, sunt placeat nam vero culpa sapiente consectetur
                similique, inventore eos fugit cupiditate numquam!
              </p>
            </div>
          </div>

          <h1 className="font-bold text-2xl text-[#000c]">6 Comments</h1>
          <ul>
            <li>
              <Comment />
            </li>
            <li>
              <Comment />
            </li>

            <li>
              <ul className="ml-16">
                <li>
                  <Comment />
                </li>
                <li>
                  <ul className="ml-16">
                    <li>
                      <Comment />
                    </li>
                    <li>
                      <ul className="ml-16">
                        <li>
                          <Comment />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Comment />
            </li>
          </ul>

          <h1 className="font-bold mt-20 mb-10 text-2xl text-[#000c]">Leave a comment</h1>
          <form action="./" className="bg-[#fafafa] text-[#666666] w-full p-12 mb-32">
            <label htmlFor="name" className="mb-3">Name *</label>
            <input type="text" id="name" className="border bg-white w-full outline-black mt-5 mb-9 h-[52px]" />

            <label htmlFor="email" className="mb-3">Email *</label>
            <input type="text" id="name" className="border bg-white w-full outline-black mt-5 mb-9 h-[52px]" />

            <label htmlFor="website" className="mb-3">Website</label>
            <input type="text" id="name" className="border bg-white w-full outline-black mt-5 mb-9 h-[52px]" />

            <label htmlFor="Message" className="mb-3">Message</label>
            <textarea type="text" id="name" className="border bg-white w-full outline-black mt-5 mb-9 h-[200px]" />

            <button className="bg-[#0033c7] text-white border border-[#0033c7] hover:bg-white hover:text-[#0033c7] rounded-full px-[24px] py-[16px]">Post Comment</button>
          </form>
        </div>

        <div>
          <div className="">
            <h1 className="text-lg mb-5">Category</h1>
            {Array(4)
              .fill(0)
              .map((itm, idx) => (
                <p className="border-b flex justify-between mb-3">
                  <Link to="/" className={"text-[#1077c5]"}>
                    Interior Design
                  </Link>
                  <span className="text-[lightgray] pb-3">{"(6)"}</span>
                </p>
              ))}
          </div>

          <div className="mt-24">
            <h1 className="text-lg mb-5">Popular Articles</h1>

            {lessData.map((item) => (
              <div key={item.id} className="flex gap-8 mb-12">
                <img
                  src={item.img}
                  alt=""
                  className="w-[80px] h-[80px] object-cover"
                />
                <div className="">
                  <h1>
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </h1>
                  <p className="flex items-center mt-5 gap-3 text-[gray] text-sm">
                    <span className="flex items-center">
                      <BiCalendar /> Oct. 04. 2018
                    </span>
                    <span className="flex items-center">
                      <AiOutlineUser /> Dave Lewis
                    </span>
                    <span className="flex items-center">
                      <BiMessageDetail /> 19
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="">
            <h1 className="text-lg mb-5">Tag Cloud</h1>
            <div className="flex gap-3 flex-wrap">
              {tagData.map((item, idx) => (
                <Tag key={idx} name={item} />
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h1 className="text-lg mb-5">Category</h1>
            {Array(4)
              .fill(0)
              .map((itm, idx) => (
                <p className="border-b flex justify-between mb-3">
                  <Link to="/" className={"text-[#1077c5]"}>
                    December 2018
                  </Link>
                  <span className="text-[lightgray] pb-3">{"(30)"}</span>
                </p>
              ))}
          </div>

          <div className="mt-16">
            <h1 className="text-lg mb-5">Paragraph</h1>
            <p className="p5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              itaque, autem necessitatibus voluptate quod mollitia delectus aut,
              sunt placeat nam vero culpa sapiente consectetur similique,
              inventore eos fugit cupiditate numquam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
