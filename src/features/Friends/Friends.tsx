import Link from "next/link"
import { BsDot } from "react-icons/bs"
import { Box, ProfilePicture } from "../../components"

export function Friends() {
  return (
    <Box className="flex flex-col gap-5 items-center px-4 py-3">
      <header>
        <h2 className="text-title-1">Chat</h2>
      </header>
      <section className="self-start">
        <ul className="flex flex-col gap-7">
          <li className="flex gap-3">
            <ProfilePicture
              picture="https://github.com/JefteMedeiros.png"
              width={42}
              height={42}
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-body-2">_jeffmedeiros.tsx</h2>
              <div className="relative">
                <h6 className="text-body-3 inline">Ativo agora</h6>
                <span className="absolute top-1/2 right-8  translate-y-[-25%] w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
            </div>
          </li>
          <li className="flex gap-3">
            <ProfilePicture
              picture="https://github.com/JefteMedeiros.png"
              width={42}
              height={42}
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-body-2">_jeffmedeiros.tsx</h2>
              <div className="relative">
                <h6 className="text-body-3 inline">Ativo agora</h6>
                <span className="absolute top-1/2 right-8  translate-y-[-25%] w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
            </div>
          </li>
          <li className="flex gap-3">
            <ProfilePicture
              picture="https://github.com/JefteMedeiros.png"
              width={42}
              height={42}
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-body-2">_jeffmedeiros.tsx</h2>
              <div className="relative">
                <h6 className="text-body-3 inline">Ativo agora</h6>
                <span className="absolute top-1/2 right-8  translate-y-[-25%] w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
            </div>
          </li>
          <li className="flex gap-3">
            <ProfilePicture
              picture="https://github.com/JefteMedeiros.png"
              width={42}
              height={42}
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-body-2">_jeffmedeiros.tsx</h2>
              <div className="relative">
                <h6 className="text-body-3 inline">Ativo agora</h6>
                <span className="absolute top-1/2 right-8  translate-y-[-25%] w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
            </div>
          </li>
          <li className="flex gap-3">
            <ProfilePicture
              picture="https://github.com/JefteMedeiros.png"
              width={42}
              height={42}
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-body-2">_jeffmedeiros.tsx</h2>
              <div className="relative">
                <h6 className="text-body-3 inline">Ativo agora</h6>
                <span className="absolute top-1/2 right-8  translate-y-[-25%] w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
            </div>
          </li>
          <li className="flex gap-3">
            <ProfilePicture
              picture="https://github.com/JefteMedeiros.png"
              width={42}
              height={42}
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-body-2">_jeffmedeiros.tsx</h2>
              <div className="relative">
                <h6 className="text-body-3 inline">Ativo agora</h6>
                <span className="absolute top-1/2 right-8  translate-y-[-25%] w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <footer>
        <Link href="#" className="text-title-1">
          Ver mais
        </Link>
      </footer>
    </Box>
  )
}
