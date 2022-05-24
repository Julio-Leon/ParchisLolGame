import { useEffect, useState } from 'react';
import './App.css';

import Table from './components/Table/Table'

class Node {
  constructor(index, safe=false, entranceToColor=false, colorEntrance=false, exitToColor=false, colorExit=false) {
    this.index = index
    this.pieces = []
    this.blockade = false
    this.safe = safe
    this.entranceToColor = entranceToColor
    this.colorEntrance = colorEntrance
    this.exitToColor = exitToColor
    this.colorExit = colorExit
  }
}

function App() {

  const [table, setTable] = useState(null)

  useEffect(() => {
    const newTable = []
    for (let i = 1; i < 69; i++) {
      let newNode
      if (i === 14) {
        newNode = new Node(i, true, false, false, true, 'yellow')
      } else if (i === 21) {
        newNode = new Node(i, true, false, false, false, false)
      } else if (i === 17) {
        newNode = new Node(i, true, true, 'blue', false, false)
      } else if (i === 26) {
        newNode = new Node(i, true, false, false, true, 'blue')
      } else if (i === 31) {
        newNode = new Node(i, true, false, false, false, false)
      } else if (i === 38) {
        newNode = new Node(i, true, true, 'red', false, false)
      } else if (i === 43) {
        newNode = new Node(i, true, false, false, true, 'red')
      } else if (i === 48) {
        newNode = new Node(i, true, false, false, false, false)
      } else if (i === 55) {
        newNode = new Node(i, true, true, 'green', false, false)
      } else if (i === 60) {
        newNode = new Node(i, true, false, false, true, 'green')
      } else if (i === 65) {
        newNode = new Node(i, true, false, false, false, false)
      } else if (i === 68) {
        newNode = new Node(i, true, true, 'yellow', false, false)
      } else {
        newNode = new Node(i)
      }
      newTable.push(newNode)
    }
    setTable(newTable)
  }, [])

  return (
    <div className="App flex-container">
      <h1>Hello World</h1>
      <Table table={table}/>
    </div>
  );
}

export default App;
