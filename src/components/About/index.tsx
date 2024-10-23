import Title from "../Title";
import img from "../../assets/images/bg_3.jpg";

const About = () => {
  return (
    <div className="w-full mt-32 mb-16">
      <div className="max grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="w-full md:max-w-[450px] bg-cover max-md:h-[300px]"
          style={{ backgroundImage: `url("${img}")` }}
        ></div>

        <div data-aos="fade-up" className="">
          <span className="pl-7">
            <Title
              name={"About"}
              title={"We are the best Interior, Exterior & Architecture Firm"}
            />
          </span>
          <p className="text-[#666] mb-4">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </p>
          <p className="text-[#666] mb-4">
            When she reached the first hills of the Italic Mountains, she had a
            last view back on the skyline of her hometown Bookmarksgrove, the
            headline of Alphabet Village and the subline of her own road, the
            Line Lane. Pityful a rethoric question ran over her cheek, then she
            continued her way.
          </p>

          <a
            href="./"
            className="text-[#002694] border-b-4 border-[#002694] font-bold"
          >
            Learn More {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
