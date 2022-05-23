import './Table.css';

import RightColumn from '../RightColumn/RightColumn';
import LeftColumn from '../LeftColumn/LeftColumn';
import TopRow from '../TopRow/TopRow';
import BottomRow from '../BottomRow/BottomRow';
import { useEffect, useState } from 'react';

function Table({ table }) {

  const [rightColumn, setRightColumn] = useState([])
  const [leftColumn, setLeftColumn] = useState([])
  const [topRow, setTopRow] = useState([])
  const [bottomRow, setBottomRow] = useState([])

  const createTable = () => {

    let tempBottomRow = []
    let tempTopRow = []
    let tempRightColumn = []
    let tempLeftColumn = []

    table.forEach(box => {
      if (box.index >= 1 || box.index <= 17) {
        tempRightColumn.push(box)
      } else if (box.index > 17 && box.index <= 34) {
        tempTopRow.push(box)
      } else if (box.index > 34 && box.index <= 51) {
        tempLeftColumn.push(box)
      } else if (box.index > 51 && box.index <= 68) {
        tempBottomRow.push(box)
      }
    })

    setRightColumn([...tempRightColumn])
    setLeftColumn([...tempLeftColumn])
    setTopRow([...tempTopRow])
    setBottomRow([...tempBottomRow])
  }

  useEffect(() => {
    createTable()
  }, [])

  return (
    <div className="table">
      <RightColumn rightColumn={rightColumn} />
      <TopRow topRow={topRow} />
      <LeftColumn leftColumn={leftColumn} />
      <BottomRow bottomRow={bottomRow} />
    </div>
  );
}

export default Table;
