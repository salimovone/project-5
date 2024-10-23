import Title from "../Title";
import { data } from "./data";
import Card from "./Card";

const Services = () => {
  return (
    <div className="w-full mt-5">
      <div className="max service-grid">
        <div data-aos="fade-up" className="max-w-[400px] max-md:max-w-full">
          <Title
            title={"Our Services"}
            desc={
              "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
            }
          />
        </div>
        <div className="max mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.map((item) => (
            <Card key={item.id} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
