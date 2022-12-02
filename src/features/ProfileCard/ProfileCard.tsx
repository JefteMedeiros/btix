import Image from "next/image"
import Link from "next/link"
import { Box } from "../../components"
import { Button } from "../../components/Button"

export function ProfileCard() {
  return (
    <Box className="flex flex-col text-center font-nunito text-gray-100">
      <div className="relative h-28">
        <Image
          fill
          className="rounded-tl-default rounded-tr-default object-contain"
          alt="asdf"
          src="https://api.lorem.space/image/car?w=314&h=116"
        />
        <Image
          className="rounded-full left-1/2 translate-x-[-50%] top-10 absolute"
          width={86}
          height={86}
          src="https://github.com/JefteMedeiros.png"
          alt=""
        />
      </div>
      <div className="m-auto">
        <h2 className="text-title-1 mt-7">Jeff Medeiros</h2>
        <h4 className="text-body-2">Frontend engineer</h4>
        <Button className="mt-3" label="Visualizar perfil" />
        <Link href="#" className="block hover:underline text-body-3 mt-4 mb-3">
          @_jeffmedeiros.tsx
        </Link>
      </div>
    </Box>
  )
}
