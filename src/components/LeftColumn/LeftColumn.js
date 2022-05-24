import './LeftColumn.css';

function LeftColumn({ leftColumn }) {
  return (
    <div className="left-column flex-container">
      {
        leftColumn.map(block => {
          return <h3 className='block' key={block.index}>{block.index}</h3>
        })
      }
    </div>
  );
}

export default LeftColumn;
