import { useAppSelector } from "@shared/model/hooks/store-hooks"

export const useContactSelector = () =>
  useAppSelector((state) => state.contacts)
