import { FiLayers } from "react-icons/fi"; 

const Card = ({name} : {name: string}) => {
  return (
    <div data-aos="fade-up" className='bg-[#fafafa] p-5'>
      <p className="text-[#0033c7] text-5xl"><FiLayers /></p>
      <h1 className="text-[#000c] font-medium mt-4 mb-2 text-lg">{name}</h1>
      <p className="p6">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
    </div>
  )
}

export default Card