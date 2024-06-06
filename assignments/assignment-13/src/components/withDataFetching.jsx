import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const withDataFetching = (WrappedComponent, url) => {
  return () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const jsonData = await response.json();
          setData(jsonData.slice(0,4));
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);

    if (loading) {
      return <Loading />;
    }

    return <WrappedComponent data={data} />;
  };
};

export default withDataFetching;
