import './RightColumn.css';

function RightColumn({ rightColumn }) {
  return (
    <div className="right-column flex-container">
      {
        rightColumn.map(block => {
          return <h3 className='block' key={block.index}>{block.index}</h3>
        })
      }
    </div>
  );
}

export default RightColumn;
