import Image from "next/image"

interface IProfilePicture {
  width: number
  height: number
  className?: string
  picture: string
}

export function ProfilePicture({
  width,
  height,
  className,
  picture,
}: IProfilePicture) {
  return (
    <Image
      className={`rounded-full ${className}`}
      width={width}
      height={height}
      src={picture}
      alt="Profile picture"
    />
  )
}
