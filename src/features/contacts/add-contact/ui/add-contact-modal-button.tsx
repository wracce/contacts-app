import { Button, Modal, useModalReducer } from "@shared/ui"

import { AddContactForm } from "./add-contact-form"

export const AddContactModalButton = () => {
  const [isShowModal, modalDispatch] = useModalReducer()

  function openModal() {
    modalDispatch({ type: "show" })
  }

  function closeModal() {
    modalDispatch({ type: "close" })
  }

  return (
    <>
      <Button variant="primary" size="l" onClick={openModal}>
        Добавить Пользователя
      </Button>
      <Modal
        header="Новый пользователь"
        isOpen={isShowModal}
        onRequestClose={closeModal}
      >
        <AddContactForm onAdded={closeModal}></AddContactForm>
      </Modal>
    </>
  )
}
