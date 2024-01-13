import React, { useEffect, useState } from "react";
const LogoNav2 = () => {
  const [logonav, setLogonav] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getLogo() {
    const data = await fetch("http://localhost:5000/logoblack");
    const res = await data.json();
    setLogonav(res);
    setLoading(false);
  }
  useEffect(() => {
    getLogo();
  }, []);

  return (
    <div className="logonav">
      {loading ? (
        <p>loading...</p>
      ) : (
        logonav && logonav.map((x) => <img key={x._id} src={x.image} alt="" />)
      )}
    </div>
  );
};

export default LogoNav2;
