import { deleteContact } from "@entities/contacts"

import { useAppDispatch } from "@shared/model/hooks/store-hooks"
import { Button, Icon } from "@shared/ui"

type Props = { id: number }

export const DeleteContactButton = ({ id }: Props) => {
  const appDispatch = useAppDispatch()

  function handleDelete() {
    appDispatch(deleteContact(id))
    console.log(id)
  }

  return (
    <Button variant="secondary" size="s" width="50px" onClick={handleDelete}>
      <Icon type="empty" />
    </Button>
  )
}
