import React, {useState} from 'react'
import { Link, Outlet, useNavigate, useInRouterContext, useNavigationType, useOutlet, useResolvedPath } from 'react-router-dom'

export default function Message() {
  const navigate = useNavigate()
  const [list] = useState([
    { id: '001',name: 'tom',age: 18 },
    { id: '002',name: 'jerry',age: 20 },
    { id: '003',name: 'jack',age: 30 },
  ])

  function handleRoute(params) {
    navigate('detail', {
      replace: true,
      state: {id: params.id,name: params.name,age: params.age}
    })
  }

  console.log(useInRouterContext()); // 返回布尔值，表示当前的组件是否包含在 BrowserRouter 中
  console.log(useNavigationType()); // 返回跳转路由进来组件时是什么模式进来，pop（原地刷新）/ replace/ push
                                    // 该组件子路由跳转时也会触发
  console.log(useOutlet()); // 呈现当前路由组件中渲染的嵌套路由
  console.log(useResolvedPath('/detail/?id=123')); // 给定一个url值， 解析其中的 path search hash值

  function forword() {
    navigate(1)
  }
  function back() {
    navigate(-1)
  }

  return (
    <div>
      <ul>
        {
          list.map(item => {
            return (
              <li key={item.id}>
                {/* <Link to={`detail/${item.id}/${item.name}/${item.age}`}>{item.name}</Link> */} {/* params写法 */}
                {/* <Link to={`detail/?id=${item.id}&name=${item.name}&age=${item.age}`}>{item.name}</Link> */} {/* search写法 */}
                <Link to="detail" state={{id: item.id, name: item.name, age: item.age}}>{item.name}</Link> {/* state写法 */}
                <button onClick={() => handleRoute({id: item.id, name: item.name, age: item.age})}>编程式路由导航</button>
                <button onClick={forword}>前进</button>
                <button onClick={back}>后退</button>
              </li>
            )
          })
        }
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
