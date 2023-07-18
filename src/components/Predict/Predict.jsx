import React from 'react'
import "./Predict.css";
import { useState } from 'react';

const Predict = () => {
    const [result, setResult] = useState("The results will appear here...")
    const [formData, setFormData] = useState({
        income: "",
        houseAge: "",
        numRooms: "",
        numBedrooms: "",
        population: "",
        occupancy: "",
        latitude: "",
        longitude: ""
      });
    
      const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const url = `https://aditya-saxena.onrender.com/predict/${formData.income/1000}/${formData.houseAge}/${formData.numRooms}/${formData.numBedrooms}/${formData.population}/${formData.occupancy}/${formData.latitude}/${formData.longitude}`
            const response = await fetch(url);
            const data = await response.json(); 
            setResult(`The predicted price is: $${data.Prediction*10000}`);
          } catch (error) {
            console.error(error);
          }
          
      };

  return (
    <section className="p-wrapper">
        <div className="paddings innerWidth flexColStart p-container">
            <div className="flexColStart heading">
                <span className="primaryText">Real Estate Price Estimator</span>
                <span className="secondaryText">Explore Our Professional Estimator: Gain Valuable Insights into the Price Range of Your Dream Home</span>
            </div>

            <form className='flexColStart form-container '>
            <label className="input-feature formLabel">Median income in block:
                <input type="number" step="any"  name="income" value={formData.income} onChange={handleInputChange} />
            </label>
            <label className="input-feature formLabel">Median house age in block:
                <input type="number" step="any"  name="houseAge" value={formData.houseAge} onChange={handleInputChange} />
            </label>
            <label className="input-feature formLabel">Average number of rooms:
                <input type="number" step="any"  name="numRooms" value={formData.numRooms} onChange={handleInputChange} />
            </label>
            <label className="input-feature formLabel">Average number of bedrooms:
                <input type="number" step="any"  name="numBedrooms" value={formData.numBedrooms} onChange={handleInputChange} />
            </label>
            <label className="input-feature formLabel">Block population:
                <input type="number" step="any"  name="population" value={formData.population} onChange={handleInputChange} />
            </label>
            <label className="input-feature formLabel">Average house occupancy:
                <input type="number" step="any"  name="occupancy" value={formData.occupancy} onChange={handleInputChange} />
            </label>
            <label className="input-feature formLabel">House block latitude:
                <input type="number" step="any"  name="latitude" value={formData.latitude} onChange={handleInputChange} />
            </label>
            <label className="input-feature formLabel">House block longitude:
                <input type="number" step="any"  name="longitude" value={formData.longitude} onChange={handleInputChange} />
            </label>

            <button type="submit" className="submitBtn" onClick={handleSubmit}>Submit</button>
            
            </form>

            <div className="paddings results">
                <span className = "result-text" value = {result}>{result}</span>
            </div>


        </div>
    </section>
  )
}

export default Predict