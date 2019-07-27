import { EventEmitter } from 'events'

export default function pipeErrors<T = EventEmitter>(
  ...args: Array<T> | Array<Array<T>>
): T
