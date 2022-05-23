import './Table.css';

function Table({ table }) {
  return (
    <div className="table">
      {
        table && table.map(box => {
            if (box.index >= 60 || box.index <= 8) {
                // RIGHT COLUMN 
            } else if (box.index > 8 && box.index <= 25) {
                // TOP ROW
            } else if (box.index > 25 && box.index <= 42) {
                // LEFT COLUMN ROW
            } else if (box.index > 42 && box.index <= 59) {
                // BOTTOM ROW
            }
        })
      }
    </div>
  );
}

export default Table;
