import PropTypes from "prop-types";
import React, { useState } from "react";

const StatefulContext = React.createContext();

const StatefulContextProvider = ({ children }) => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isAddPost, setIsAddPost] = useState(false);
  const [flag, setFlag] = useState(1);

  const invalidate = () => {
    setFlag((prev) => prev + 1);
  };

  return (
    <StatefulContext.Provider
      value={{
        selectedPostId,
        setSelectedPostId,
        isAddPost,
        setIsAddPost,
        flag,
        invalidate,
      }}
    >
      {children}
    </StatefulContext.Provider>
  );
};

StatefulContextProvider.propTypes = {
  children: PropTypes.node,
};

export { StatefulContextProvider };

export default StatefulContext;
