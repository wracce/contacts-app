// For to match the FSD design: store hooks from 'app' to 'shared' folder
declare global {
  type RootState = import("../src/app/app-store").RootState
  type AppDispatch = import("../src/app/app-store").AppDispatch
}

export {}
