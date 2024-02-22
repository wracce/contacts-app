import close24IconSrc from "@public/icons/24/close.png"
import trash24IconSrc from "@public/icons/24/trash.png"

export type IconTypeProps = "empty" | "close"
export type IconSizeProps = "24px"

type Props = {
  type: IconTypeProps
  size?: IconSizeProps | undefined
}

function getIconSrc(type: IconTypeProps, size: IconSizeProps = "24px") {
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
  return <img width={size} height={size} src={getIconSrc(type, size)} />
}
