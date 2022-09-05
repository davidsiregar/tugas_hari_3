import { type } from "@testing-library/user-event/dist/type";
import React, {memo, useCallback, useState} from "react";
import { JsxElement } from "typescript";

// type NewNumber={
//   onNumber:(buttonForNumber:number)=>void
// }

const Counters:React.FC = () => {
  const [number, setNumber] = useState(0);

  const tambahHandler = useCallback(() => {
    setNumber((prevNumber) => prevNumber + 1);
  }, []);

  const kurangHandler = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <div>
        <p>Sekarang angka {number}</p>
      </div>

      <div>
        <ButtonTambah tambahHandler={tambahHandler} />
        <button className='px-4 py-2 bg-cyan-400' onClick={kurangHandler}>
          kurang
        </button>
      </div>
    </div>
  );
};

const ButtonTambah = memo((props) => {
  console.log('button tambah re-render');
  const {tambahHandler}  = props;

  return (
    <button className='px-4 py-2 bg-blue-400' onClick={tambahHandler}>
      tambah
    </button>
  );
});


export default Counters;