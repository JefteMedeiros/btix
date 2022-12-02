import { BsHouse, BsPeople, BsGlobe, BsGear, BsThreeDots } from "react-icons/bs"
import { Box } from "../../components"

export function HomeNav() {
  return (
    <Box className="py-3 sticky top-[347px] px-4">
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <BsHouse />
          <span className="hover:underline cursor-pointer">Início</span>
        </li>
        <li className="flex items-center gap-2">
          <BsPeople />
          <span className="hover:underline cursor-pointer">Grupos</span>
        </li>
        <li className="flex items-center gap-2">
          <BsGlobe />
          <span className="hover:underline cursor-pointer"> Explorar</span>
        </li>
        <li className="flex items-center gap-2">
          <BsGear />
          <span className="hover:underline cursor-pointer"> Configurações</span>
        </li>
        <li className="flex items-center gap-2">
          <BsThreeDots />
          <span className="hover:underline cursor-pointer">Mais</span>
        </li>
      </ul>
    </Box>
  )
}
