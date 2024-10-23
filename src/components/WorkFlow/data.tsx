import { FaLayerGroup } from "react-icons/fa"; 
import { RiCompasses2Line } from "react-icons/ri"; 
import { GiBrain } from "react-icons/gi"; 

type Obj = {
    id: number;
    icon: React.ReactNode;
    name: string;
};

export const data: Obj[] = [
    {
        id: 1,
        icon: <GiBrain />,
        name: 'PERFECTLY DESIGN',
    },
    {
        id: 2,
        icon: <RiCompasses2Line />,
        name: 'CAREFULLY PLANNED',
    },
    {
        id: 3,
        icon: <FaLayerGroup />,
        name: 'SMARTLY EXECUTE',
    },
];
