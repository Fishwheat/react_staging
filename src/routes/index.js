import {Navigate} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/Home/pages/News'
import Message from '../pages/Home/pages/Message'
import Detail from '../pages/Home/pages/Detail'

const routes = [
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            // path: 'detail/:id/:name/:age', // params写法
            path: 'detail', // search 和 state写法
            element: <Detail />
          }
        ]
      },
      {
        path: '',
        element: <Navigate to='message' replace />
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to='/about' replace />
  }
]
export default routes
