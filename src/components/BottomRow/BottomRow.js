import './BottomRow.css';

function BottomRow({ bottomRow }) {
  return (
    <div className="bottom-row flex-container">
      {
        bottomRow.map(block => {
          return <h3 className='block' key={block.index}>{block.index}</h3>
        })
      }
    </div>
  );
}

export default BottomRow;
