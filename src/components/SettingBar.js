import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SettingBar.css';

export default function SettingBar() {

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("density", 7850);
    localStorage.setItem("calcMode", "byLength");
    navigate("/hexbar")
  }, []);

  const handleNavigation = (event) => {
    navigate(`/${event.target.value}`)
  };

  const handleDensity = (event) => {
    localStorage.setItem("density", parseFloat(event.target.value));
  };
  
  const handleMode = (event) => {
    localStorage.setItem("clacMode", event.target.value);
  };

  return (
    <div id ="settingBar" className="setting-bar">
      <div className="select-group">
        <label htmlFor="calc">Calculation for</label>
        <select name="calc" id="calc" onChange={handleNavigation}>
          <option selected value="hexbar">Hex Bar</option>
          <option value="roundbar">Round Bar</option>
          <option value="squarebar">Square Bar</option>
          <option value="roundtube">Round Tube</option>
          <option value="rectangulartube">Rectangular Tube</option>
          <option value="tbar">T Bar</option>
          <option value="angle">Angle</option>
          <option value="channel">Channel</option>
          <option value="beam">Beam</option>
          <option value="flat">Flat</option>
          <option value="plate">Plate</option>
        </select>
      </div>
      <div className="select-group">
        <label htmlFor="material">Material</label>
        <select name="material" id="material" onChange={handleDensity}>
          <option selected value="7850">Steel</option>
          <option value="2730">Aluminum</option>
          <option value="8550">Brass</option>
          <option value="8930">Copper</option>
          <option value="8880">Bronze</option>
          <option value="2200">Teflon</option>
          <option value="7920">SS 304/310</option>
          <option value="7940">SS 316/321</option>
          <option value="7710">SS 410/430</option>
        </select>
      </div>
      <div className="select-group">
        <label htmlFor="mode">Mode</label>
        <select name="mode" id="mode" onChange={handleMode}>
          <option selected value="by Length">by Length</option>
          <option value="by Weight">by Weight</option>
        </select>
      </div>
    </div>
  );
}
