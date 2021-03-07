import './styles.scss'

type User = {
  name: string,
  age: number
}

const root = document.getElementById('root')

const user: User = {
  name: 'destin',
  age: 36
}

root.innerText = `Hello, ${user.name} you are ${user.age}`