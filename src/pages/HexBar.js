import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './HexBar.css';
import img from '../images/hexbar.png';

export default function HexBar() {

  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [pieces, setPieces] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = () => {
    if (!validForm()) return;
    const AF = parseFloat(width) / 1000;
    const len = parseFloat(length) / 1000;
    const density = localStorage.getItem("density");
    const wt = (Math.sqrt(3) * AF * AF * len * density) / 2;
    setWeight(wt);
    if (pieces) {
      setTotalWeight(weight * pieces);
    } else {
      setTotalWeight(0);
    }
    if (price) {
      if (pieces) {
        setTotalPrice(weight * pieces * price);
      } else {
        setTotalPrice(weight * price);
      }
    } else {
      setTotalPrice(0);
    }
  };

  const validForm = () => {
    if (width === '' || width === null) {
      toast.error("Width cannot be blank");
      return false;
    }
    if (length === '' || length === null) {
      toast.error("Length cannot be blank");
      return false;
    }
    if (!parseFloat(width)) {
      toast.error("Please enter a valid number for Width");
      return false;
    }
    if (!parseFloat(length)) {
      toast.error("Please enter a valid number for Length");
      return false;
    }
    if (pieces.length) {
      if (!parseFloat(pieces)) {
        toast.error("Please enter a valid number of Pieces");
        return false;
      }
    }
    if (price.length) {
      if (!parseFloat(price)) {
        toast.error("Please enter a valid number of Price");
        return false;
      }
    }
    return true;
  };

  return (
    <div className="page">
      <div className="img-form">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="form">
          <div className="input-group">
            <label htmlFor="width">Width (A)<span>*</span></label>
            <input type="text" id="width" name="width" onChange={(e) => { setWidth(e.target.value) }} />
          </div>
          <div className="input-group">
            <label htmlFor="length">Length<span>*</span></label>
            <input type="text" id="length" name="length" onChange={(e) => { setLength(e.target.value) }} />
          </div>
          <div className="input-group">
            <label htmlFor="pieces">Pieces</label>
            <input type="text" id="pieces" name="pieces" onChange={(e) => { setPieces(e.target.value) }} />
          </div>
          <div className="input-group">
            <label htmlFor="price">Kg Price</label>
            <input type="text" id="price" name="price" onChange={(e) => { setPrice(e.target.value) }} />
          </div>
          <div style={{ fontSize: '0.6rem', textAlign: 'center', color: 'red' }}>All dimensions in mm</div>
          <div className="input-group">
            <button class="btn" onClick={handleClick}>Calculate</button>
          </div>
        </div>
      </div>
      <div className="result">
        {weight ?
          <div>Weight: {weight.toLocaleString('en-IN', { minimumFractionDigits: 3, maximumFractionDigits: 3 })} Kg.</div> :
          <></>
        }
        {totalWeight ?
          <div>Total Weight: {totalWeight.toLocaleString('en-IN', { minimumFractionDigits: 3, maximumFractionDigits: 3 })} Kg.</div> :
          <></>
        }
        {totalPrice ?
          <div>Total Price: {totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div> :
          <></>
        }
      </div>
    </div>
  );
}
