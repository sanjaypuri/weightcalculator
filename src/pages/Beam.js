import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './HexBar.css';
import img from '../images/beam.png';

export default function Beam() {

  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [thickS, setThickS] = useState('');
  const [thickT, setThickT] = useState('');
  const [length, setLength] = useState('');
  const [pieces, setPieces] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = () => {
    if(!validForm()) return;
    const sa = parseFloat(sideA)/1000;
    const sb = parseFloat(sideB)/1000;
    const tt = parseFloat(thickT)/1000;
    const ts = parseFloat(thickS)/1000;
    const len = parseFloat(length)/1000;
    const density = localStorage.getItem("density");
    const wt = sa*ts*2*len*density + (sb-2*ts)*tt*len*density;
    setWeight(wt);
    if(pieces){
      setTotalWeight(weight*pieces);
    } else {
      setTotalWeight(0);
    }
    if(price){
      if(pieces){
        setTotalPrice(weight*pieces*price);
      } else {
        setTotalPrice(weight*price);
      }
    } else {
      setTotalPrice(0);
    }
  };

  const validForm = () => {
    if(sideA === '' || sideA === null){
      toast.error("Side(A) cannot be blank");
      return false;
    }
    if(sideB === '' || sideB === null){
      toast.error("Side(B) cannot be blank");
      return false;
    }
    if(thickT === '' || thickT === null){
      toast.error("Thickness(T) cannot be blank");
      return false;
    }
    if(thickS === '' || thickS === null){
      toast.error("Thickness(S) cannot be blank");
      return false;
    }
    if(length === '' || length === null){
      toast.error("Length cannot be blank");
      return false;
    }
    if(!parseFloat(sideA)){
      toast.error("Please enter a valid number for Side(A)");
      return false;
    }
    if(!parseFloat(sideB)){
      toast.error("Please enter a valid number for Side(B)");
      return false;
    }
    if(!parseFloat(thickT)){
      toast.error("Please enter a valid number for Thickness(T)");
      return false;
    }
    if(!parseFloat(thickS)){
      toast.error("Please enter a valid number for Thickness(S)");
      return false;
    }
    if(!parseFloat(length)){
      toast.error("Please enter a valid number for Length");
      return false;
    }
    if(pieces.length){
      if(!parseFloat(pieces)){
        toast.error("Please enter a valid number of Pieces");
        return false;
      }
    }
    if(price.length){
      if(!parseFloat(price)){
        toast.error("Please enter a valid number of Price");
        return false;
      }
    }
    return true;
  }; 

  return (
    <div className="page">
      <div className="img-form-2">
        <div className="img">
          <img src={img}/>
        </div>
        <div className="form">
          <div className="input-group">
            <label htmlFor="sidea">Side (A)<span>*</span></label>
            <input type="text" id="sidea" name="sidea" onChange={(e) => {setSideA(e.target.value)}}/>
          </div>
          <div className="input-group">
            <label htmlFor="sideb">Side (B)<span>*</span></label>
            <input type="text" id="sideb" name="sideb" onChange={(e) => {setSideB(e.target.value)}}/>
          </div>
          <div className="input-group">
            <label htmlFor="thicka">Thickness (T)<span>*</span></label>
            <input type="text" id="thicka" name="thicka" onChange={(e) => {setThickT(e.target.value)}}/>
          </div>
          <div className="input-group">
            <label htmlFor="thickb">Thickness (S)<span>*</span></label>
            <input type="text" id="thickb" name="thickb" onChange={(e) => {setThickS(e.target.value)}}/>
          </div>
          <div className="input-group">
            <label htmlFor="length">Length<span>*</span></label>
            <input type="text" id="length" name="length" onChange={(e) => {setLength(e.target.value)}}/>
          </div>
          <div className="input-group">
            <label htmlFor="pieces">Pieces</label>
            <input type="text" id="pieces" name="pieces" onChange={(e) => {setPieces(e.target.value)}}/>
          </div>
          <div className="input-group">
            <label htmlFor="price">Kg Price</label>
            <input type="text" id="price" name="price" onChange={(e) => {setPrice(e.target.value)}}/>
          </div>
          <div style={{fontSize:'0.6rem', textAlign:'center', color:'red'}}>All dimensions in mm</div>
          <div className="input-group">
            <button class="btn" onClick={handleClick}>Calculate</button>
          </div>
        </div>
      </div>
      <div className="result">
          {weight ? 
            <div>Weight: {weight.toLocaleString('en-IN', { minimumFractionDigits: 3, maximumFractionDigits: 3 })} Kg.</div>          : 
          <></>
          } 
          {totalWeight ? 
            <div>Total Weight: {totalWeight.toLocaleString('en-IN', { minimumFractionDigits: 3, maximumFractionDigits: 3 })} Kg.</div>          : 
          <></>
          } 
          {totalPrice ? 
            <div>Total Price: {totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>          : 
          <></>
          }
      </div>
    </div>
  );
}
