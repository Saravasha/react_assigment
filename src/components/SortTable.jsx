import React from "react";


const SortTable = () => {

return (
    <div >
        <h1>Sort by Name</h1>
        <form>
            <input type="text" placeholder="Person Name" method="post" name="name"/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
    )
}

export default SortTable;