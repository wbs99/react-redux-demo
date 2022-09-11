import { addPerson } from "./constant"

export const addPersonAction = personObj => {
  return {
    type: addPerson,
    data: personObj,
  }
}
