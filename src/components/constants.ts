type PointType = {
  x: number;
  y: number;
};

interface PointInterface {
  x: number;
  y: number;
}

interface Container {
  value: number | null | undefined;
}

interface User {
  firstName: string;
  lastName?: string;
}

type UserInputSanitizedString = string;

function greet(person: string, date: Date): string {
  return `Hello ${person}, today is ${date.toDateString()}`;
}

function printCoord(pt: PointInterface): string {
  return `The coordinate's x value is ${pt.x} and y value is ${pt.y}`;
}

function printName(user: User): string {
  return user.firstName + ' ' + (user.lastName || '');
}

function printIdUnionType(id: number | string): string {
  return `Id is ${id}`;
}

function welcomePeople(x: string[] | string): string {
  if (Array.isArray(x)) {
    return `Hello, ${x.join(', ').toUpperCase()}`;
  } else {
    return x;
  }
}

function sanitizeInput(str: string): UserInputSanitizedString {
  return str;
}

function callAPI(): string {
  const req = {url: 'https://google.com', method: 'GET'} as const;
  return handleRequest(req.url, req.method);
}

function handleRequest(url: string, method: 'GET' | 'POST'): string {
  console.log(url, method);
  return 'success';
}

function liveDangerously(x?: number | undefined): string {
  return x ? x!.toFixed().toString() : '0';
}

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return new Array(padding + 1).join(' ') + input;
  }
  return padding + ' ' + input;
}

function getUsersOnlineMessage(numUsersOnline?: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now`;
  }
  return "Nobody's hear. :(";
}

function multiplyValue(container: Container, factor: number): string {
  if (container.value) {
    return (container.value *= factor).toString();
  }
  return '0';
}

interface Circle {
  kind: 'circle';
  radius?: number;
}

interface Square {
  kind: 'squre';
  sideLength?: number;
}
interface Triangle {
  kind: 'triangle';
  sideLength: number;
}

type Shape = Circle | Square | Triangle;

function handleShape(shape: Shape): string {
  if (shape.kind === 'circle') {
    return 'Circle';
  } else {
    return 'Squre';
  }
}

function getArea(shape: Shape): string {
  switch (shape.kind) {
    case 'squre':
      return (shape.sideLength! * 2).toString();
    case 'circle':
      return (Math.PI * shape.radius! ** 2).toString();
    case 'triangle':
      return (shape.sideLength * 3).toString();
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

function greeterFunctionType(fn: (a: string) => string): string {
  return fn('Hello world');
}

function printLog(s: string): string {
  return s.toString();
}

function arrayWithAny<Type>(arr: Type[]): Type {
  return arr[0];
}

function mapFunction<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output,
): Output[] {
  return arr.map(func);
}

function longest<Type extends {length: number}>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

function combineArray<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
  return 'Success';
}

// function makeDate(timestamp: number): Date {
//   return new Date(timestamp);
// }

// function makeDate(m: number, d: number, y: number): Date {
//   return new Date(y, m, d);
// }

// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

function len(x: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

function safeParse(s: string): unknown {
  return JSON.parse(s);
}

function failFunction(msg: string): never {
  throw new Error(msg);
}

type voidFuncation = () => void;

const f1: voidFuncation = () => true;

export {
  greet,
  printCoord,
  printName,
  printIdUnionType,
  welcomePeople,
  sanitizeInput,
  callAPI,
  liveDangerously,
  padLeft,
  getUsersOnlineMessage,
  multiplyValue,
  handleShape,
  getArea,
  greeterFunctionType,
  printLog,
  arrayWithAny,
  mapFunction,
  longest,
  combineArray,
  myForEach,
  makeDate,
  len,
  safeParse,
  failFunction,
  f1,
};
