import React from "react";
import data from "../data/dailyCard.json";

function DailyInfoCard(){
    console.log(data[0].title);
    return (
    <div className="dailyCard">
    HAPPY!!!
        {data.map((item) => (
            
                <div>
                    <span className="">{item.time}</span>
                    <div>
                        <span>{item.title}</span>
                        <p>{item.description}</p>
                    </div>
                </div>
    ))}
    </div>
    );  
            
}
export default DailyInfoCard();
    
