import { useState } from "react";


export default function UserInput({onChange ,useInput}){

  
    
    return(

        <section id="user-input">
           <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={useInput.initialInvestment} onChange={(e)=> onChange("initialInvestment", e.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number"  value ={useInput.annualInvestment} onChange={(e)=> onChange("annualInvestment", e.target.value)}/>
                </p>
                </div>
                <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value= {useInput.expectedReturn} onChange={(e)=> onChange("expectedReturn", e.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value = {useInput.duration} onChange={(e)=> onChange("duration", e.target.value)}/>
                </p>

            </div>
        </section>
    );
}