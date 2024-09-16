import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const ProjectDeal = () => {
  return (
    <>
      <div className="project-deal-area text-center default-padding bg-gray">
        <div className="deal-illustration">
          <img src="/img/illustration/8.png" alt="Image Not Found" />
        </div>
        <div className="arrow-illustration">
          <img src="/img/illustration/9.png" alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="project-deal">
                <h2 className="title">
                  Need Any <strong>Help?</strong> <br /> Use Our Free AI Tool to
                  find your Expert
                </h2>
                <Link
                  className="btn mt-30 btn-md circle btn-gradient animation"
                  to="/contact-us#"
                >
                  Find My Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDeal;
