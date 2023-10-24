import React from 'react';
import './HexBar.css';
import img from '../images/beam.png';

export default function Beam() {
  return (
    <div className="page">
      <div className="img-form-2">
        <div className="img">
          <img src={img}/>
        </div>
        <div className="form">
          <div className="input-group">
            <label htmlFor="sidea">Side (A)</label>
            <input type="text" id="sidea" name="sidea" />
          </div>
          <div className="input-group">
            <label htmlFor="sideb">Side (B)</label>
            <input type="text" id="sideb" name="sideb" />
          </div>
          <div className="input-group">
            <label htmlFor="thicka">Thickness (T)</label>
            <input type="text" id="thicka" name="thicka" />
          </div>
          <div className="input-group">
            <label htmlFor="thickb">Thickness (S)</label>
            <input type="text" id="thickb" name="thickb" />
          </div>
          <div className="input-group">
            <label htmlFor="length">Length</label>
            <input type="text" id="length" name="length" />
          </div>
          <div className="input-group">
            <label htmlFor="pieces">Pieces</label>
            <input type="text" id="pieces" name="pieces" />
          </div>
          <div className="input-group">
            <label htmlFor="price">Kg Price</label>
            <input type="text" id="price" name="price" />
          </div>
          <div className="input-group">
            <button class="btn">Calculate</button>
          </div>
        </div>
      </div>
      <div className="result">Result</div>      
    </div>
  );
}
