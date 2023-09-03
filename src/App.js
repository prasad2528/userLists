import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Rahul',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Prasad',
    role: 'applocation Programing Developer',
  },
  {
    uniqueNo: 3,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'sai',
    role: 'Data analyst',
  },
  {
    uniqueNo: 4,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'kalyani',
    role: 'Frontend Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">User Lists</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
