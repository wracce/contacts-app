import { Button, Modal, useModalReducer } from "@shared/ui"

import { EditContactForm } from "./edit-contact-form"

type Props = {
  id: number
}
export const EditContactModalButton = ({ id }: Props) => {
  const [isShowModal, modalDispatch] = useModalReducer()

  function openModal() {
    modalDispatch({ type: "show" })
  }

  function closeModal() {
    modalDispatch({ type: "close" })
  }

  return (
    <>
      <Button variant="primary" size="m" onClick={openModal}>
        Редактировать
      </Button>
      <Modal
        header="Редактирование пользователя"
        isOpen={isShowModal}
        onRequestClose={closeModal}
      >
        <EditContactForm onEdited={closeModal} id={id}></EditContactForm>
      </Modal>
    </>
  )
}
