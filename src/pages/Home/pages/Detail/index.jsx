import React from 'react'
import { 
  // useParams,
  // useSearchParams,
  useLocation,
} from 'react-router-dom'

export default function Detail() {
  // params 写法
  // const { id, name, age } = useParams()

  // search 写法
  // const [params, setParams] = useSearchParams()
  // console.log(params, setParams);
  // const id = params.get('id')
  // const name = params.get('name')
  // const age = params.get('age')

  // state 写法
  const location = useLocation()
  const { id, name, age } = location.state
  // console.log(location.state);

  return (
    <div>
      <div>id: {id}</div>
      <div>name: {name}</div>
      <div>age: {age}</div>
    </div>
  )
}
