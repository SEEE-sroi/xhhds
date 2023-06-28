import React from "react";
import {useSelector} from "react-redux";
 

function Profile (){
        const user = useSelector((state)=>state.user.value);
        const themeColor = useSelector((state)=>state.theme.value)
        return(


            <div style={{color:themeColor}}>
                


                <p>


                    Age
                    : {user.age}  
                </p>

                <p>

                    NAME: {user.name}
                </p>

                <p>
                        Email :{user.email}
                </p>   
            </div>
        )
}
export default Profile ;