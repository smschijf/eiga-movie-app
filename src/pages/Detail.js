import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdb from "../api/tmdb";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await tmdb.get(`movie/${id}`);
        setData(res.data);
        console.log(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <h1>{data.original_title}</h1>
  )
}

export default Detail;