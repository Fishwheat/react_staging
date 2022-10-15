import { ADD_PERSON } from '../constant'

const initState = [{id: '001', name: 'tom', age: 18}]
export default function personsReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      // 不可使用注释的写法，这样写改了参数preState，该函数就不是纯函数了
      // react不会相应改后的结果，原因是同个数组地址一样
      // preState.unshift(data)
      // return preState
      return [data, ...preState]
    default:
      return preState
  }
}
