import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './HexBar.css';
import img from '../images/plate.png';

export default function Plate() {

  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [thick, setThick] = useState('');
  const [pieces, setPieces] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = () => {
    if(!validForm()) return;
    const l = parseFloat(sideA)/1000;
    const w = parseFloat(sideB)/1000;
    const t = parseFloat(thick)/1000;
    const density = localStorage.getItem("density");
    const wt = l*w*t*density;
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
    if(thick === '' || thick === null){
      toast.error("Thickness cannot be blank");
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
    if(!parseFloat(thick)){
      toast.error("Please enter a valid number for Thickness");
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
      <div className="img-form">
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
            <label htmlFor="thick">Thickness<span>*</span></label>
            <input type="text" id="thick" name="thick" onChange={(e) => {setThick(e.target.value)}}/>
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
