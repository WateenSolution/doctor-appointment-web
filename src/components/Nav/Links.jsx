import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Links = () => {
  const [linksVisibility, setLinksVisibility] = useState(false);
  const navigate = useNavigate();
  const links = [
    { id: "0", title: "Overview", route: "/" },
    { id: "1", title: "Services", route: "/" },
    { id: "2", title: "Our Team", route: "/" },
    { id: "3", title: "Why Choose Us", route: "/" },
    { id: "3", title: "Contact Us", route: "/" },
  ];

  const toggleVisibility = (link) => {
    setLinksVisibility(!linksVisibility);
    navigate(link?.route);
  };

  return (
    <>
      <div className="links__button hide__button">
        <button className="btn menu" onClick={toggleVisibility}>
          <RiMenu3Line />
        </button>
      </div>
      <div className={`links ${!linksVisibility ? "hide__links" : ""}`}>
        {links.map((link, index) => {
          return (
            <a
              className={!index ? "active" : ""}
              href={`#${link?.title}`}
              onClick={() => {
                toggleVisibility(link);
              }}
            >
              {link?.title}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Links;
