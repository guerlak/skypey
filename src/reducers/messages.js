import { getMessages } from "../data";

export default function messages(state = getMessages(10), action) {
  return state;
}