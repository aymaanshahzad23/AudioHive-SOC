import React, { useState, useEffect} from "react";
import data from "../data/roomCard.json";
import { BsChatDots, BsChatDotsFill, BsFillPersonFill} from "react-icons/bs";

export default function RoomInfoCard(props){
    return( 
    <>
        <h2>I am the room info card</h2>
        {data.map((item)=>(
            <div>
                <div>
                    <div className="style.roomCardContainer">
                        <h6>{item.title}</h6>
                        <h2>{item.sub_title}</h2>
                        <div className="style.roomMembers">
                            <div>
                                <img src = "/images/user-img.jpg" alt = ""/>
                                <img src = "/images/user-img2.jpg" alt = ""/>
                            </div>
                            <div>
                                {item.members.map((item) => (
                                    <p>
                                        {item.first_name} {item.last_name}<BsChatDots />
                                    </p>
                                ))}
                                <p className="d-flex align-items-center">
                                    <BsFillPersonFill/>
                                    <span className="mx-2">1.8</span>{" "}
                                    <span className="mr-2"></span><BsChatDotsFill />
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </>
    );
}