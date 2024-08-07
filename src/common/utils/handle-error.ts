import { Dispatch } from 'redux'
import { isAxiosError } from 'axios'
import { setAppErrorAC, SetAppErrorAction } from '../../app/app-reducer.ts'

type HandleErrorDispatch = Dispatch<SetAppErrorAction>

export const handleAppError = (error: unknown, dispatch: HandleErrorDispatch) => {
  let errorMessage: string

  if (isAxiosError<ServerError>(error)) {
    errorMessage = error.response ? error.response.data.errorMessages[0].message : error.message
  } else {
    errorMessage = (error as Error).message
  }

  console.log(errorMessage)
  dispatch(setAppErrorAC(errorMessage))
}

type ServerError = { errorMessages: Array<{ field: string, message: string }> }
