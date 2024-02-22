
import { LogoutButton } from "@features/session/logout"

import { useContactSelector } from "@entities/contacts"

import {
  Button,
  Modal,
  Table,
  TableHeaderProps,
  TextField,
  Toggle,
  Typography,
  useModalReducer,
} from "@shared/ui"

import css from "./contacts-page.module.styl"

const headers: Array<TableHeaderProps> = [
  {
    name: "id",
    width: 52,
    value: "№",
    align: "left",
  },
  {
    name: "lastName",
    width: 130,
    value: "Имя",
    align: "left",
  },
  {
    name: "firstName",
    width: 120,
    value: "Фамилия",
    align: "left",
  },
  {
    name: "gender",
    width: 120,
    value: "Пол",
    align: "left",
  },
  {
    name: "email",
    width: 200,
    value: "Почта",
    align: "left",
  },
  {
    name: "actions",
    width: 128,
    value: "Действия",
    align: "left",
  },
]

// const data: Array<TableDataProps> = [
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
//   {
//     id: "1",
//     lastName: "Алексеев",
//     firstName: "Валерий",
//     gender: "Мужской",
//     email: "gorodgrosh@yandex.ru",
//     actions: (
//       <Button variant="primary" size="m">
//         Редактировать
//       </Button>
//     ),
//   },
// ]

export const ContactsPage = () => {
  const [isShowModal, modalDispatch] = useModalReducer()
  const contacts = useContactSelector()

  const data = contacts.map((contact, index) => ({
    id: index,
    lastName: contact.lastName,
    firstName: contact.firstName,
    gender: contact.gender,
    email: contact.email,
    actions: (
      <Button variant="primary" size="m">
        Редактировать
      </Button>
    ),
  }))

  const openModal = () => {
    modalDispatch({ type: "show" })
  }

  return (
    <>
      <header className={css["contacts__header"]}>
        <Typography variant="h1">Иванов И.И.</Typography>
        <div className={css["contacts__empty"]}></div>
        <Button variant="primary" size="l" onClick={openModal}>
          Добавить Пользователя
        </Button>
        <LogoutButton />
      </header>
      <main className={css["contacts__content"]}>
        <div className={css["contacts__table"]}>
          <Table headers={headers} data={data} />
        </div>
        <Modal
          header="Новый пользователь"
          isOpen={isShowModal}
          onRequestClose={() => {
            modalDispatch({ type: "close" })
          }}
        >
          <form className={css.contacts__form}>
            <Toggle
              data={[
                { name: "Мужчина", value: "Мужчина" },
                { name: "Женщина", value: "Женщина" },
              ]}
              onChange={() => {}}
              className={css.contacts__gender}
            ></Toggle>
            <div className={css.contacts__fields}>
              <TextField name="lastName" label="Фамилия*" />
              <TextField name="firstName" label="Имя*" />
              <TextField name="email" label="Email*" />
            </div>

            <Button width="552px">Сохранить</Button>
          </form>
        </Modal>
      </main>
    </>
  )
}
