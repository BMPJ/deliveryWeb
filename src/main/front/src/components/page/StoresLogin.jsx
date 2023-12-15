import React, { useState } from "react";
import axios from "axios";

function StoresLogin(){

    return(

        <div>
            <div>
                ID<input type="text" name="id"/>
            </div>
            <div>
                PASS<input type="text" name="password"/>
            </div>
        </div>

    )

}

export default StoresLogin