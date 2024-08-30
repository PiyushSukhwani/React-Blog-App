import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {

    const data = useLoaderData()
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         setData(data);
//       });
//   });

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 font-bold text-3xl">Github followers: {data.followers}
    <img src={data.avatar_url} alt="picture" width={'300px'} />
    </div>
  );
}

export default Github;

export const gitLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}