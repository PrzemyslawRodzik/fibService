import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <a href="https://github.com/PrzemyslawRodzik/fibService">
        README GitHub.com
      </a>
      <br />
      <a href="https://gitlab.com/PrzemyslawRodzik/fibService">
        README GitLab.com
      </a>
      <Link to="/">Go back home</Link>
    </div>
  );
};
