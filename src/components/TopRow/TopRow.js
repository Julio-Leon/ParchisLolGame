import './TopRow.css';

function TopRow({ topRow }) {
  return (
    <div className="top-row flex-container">
      {
        topRow.map(block => {
          return <h3 className='block' key={block.index}>{block.index}</h3>
        })
      }
    </div>
  );
}

export default TopRow;
