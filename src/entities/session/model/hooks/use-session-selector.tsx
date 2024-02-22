import { useAppSelector } from "@shared/model/hooks/store-hooks"

export const useSessionSelector = () => useAppSelector((state) => state.session)
