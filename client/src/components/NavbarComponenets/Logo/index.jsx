import React, { useEffect, useState } from "react";
const LogoNav = () => {
  const [logonav, setLogonav] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getLogo() {
    const data = await fetch("http://localhost:3000/logonav");
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
        logonav && logonav.map((x) => <img key={x.id} src={x.image} alt="" />)
      )}
    </div>
  );
};

export default LogoNav;
