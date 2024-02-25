import close24IconSrc from "@public/icons/24/close.png"
import trash24IconSrc from "@public/icons/24/trash.png"
import { IconSizeProp, IconTypeProp } from "./types"

type Props = {
  type: IconTypeProp
  size?: IconSizeProp | undefined
}

function getIconSrc(type: IconTypeProp, size: IconSizeProp = "24px") {
  if (size === "24px") {
    switch (type) {
      case "close":
        return close24IconSrc
      case "empty":
        return trash24IconSrc
    }
  }
}

export const Icon = ({ type, size }: Props) => {
  return (
    <img alt={type} width={size} height={size} src={getIconSrc(type, size)} />
  )
}
