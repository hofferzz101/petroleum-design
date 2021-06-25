import { notification } from "antd"

export const showNotfication = (type, title, text) => {
  notification[type]({
    message: title,
    description: text,
  })
}