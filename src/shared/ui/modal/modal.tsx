import ReactModal from "react-modal"

import { Icon } from ".."
import { State } from "./hooks/useModalReducer"
import css from "./modal.module.styl"

ReactModal.setAppElement("#root")

type Props = {
  header: string
  isOpen: State
  onRequestClose: () => void
  children: React.ReactNode
}

export const Modal = ({ header, isOpen, onRequestClose, children }: Props) => {
  return (
    <ReactModal
      isOpen={isOpen.isShow}
      onRequestClose={onRequestClose}
      className={css.modal__container}
    >
      <div className={css.modal__content}>
        <button className={css.modal__close} onClick={onRequestClose}>
          <Icon type="close"></Icon>
        </button>
        <h2 className={css.modal__header}>{header}</h2>
        <div className="">{children}</div>
      </div>
    </ReactModal>
  )
}
