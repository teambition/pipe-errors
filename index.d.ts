import { EventEmitter } from 'events'

type EE = EventEmitter

function pipeErrors<A = EE>(a: A): A
function pipeErrors<A = EE, B = EE>(a: A, b: B): B
function pipeErrors<A = EE, B = EE, C = EE>(a: A, b: B, c: C): C
function pipeErrors<A = EE, B = EE, C = EE, D = EE>(a: A, b: B, c: C, d: D): D
function pipeErrors<A = EE, B = EE, C = EE, D = EE, E = EE>(
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
): E
function pipeErrors<A = EE, B = EE, C = EE, D = EE, E = EE, F = EE>(
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
): F
function pipeErrors<A = EE>(...a: [A]): A
function pipeErrors<A = EE, B = EE>(...a: [A, B]): B
function pipeErrors<A = EE, B = EE, C = EE>(...a: [A, B, C]): C
function pipeErrors<A = EE, B = EE, C = EE, D = EE>(...a: [A, B, C, D]): D
function pipeErrors<A = EE, B = EE, C = EE, D = EE, E = EE>(
  ...a: [A, B, C, D, E]
): E
function pipeErrors<A = EE, B = EE, C = EE, D = EE, E = EE, F = EE>(
  ...a: [A, B, C, D, E, F]
): F

export default pipeErrors
