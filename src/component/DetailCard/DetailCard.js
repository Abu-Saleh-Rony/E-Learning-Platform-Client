import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
const DetailCard = () => {
  const dataCard = useLoaderData();
  const { description, img, name, title, id } = dataCard;
  

  const commonHref = useRef();
  const handlePrint = useReactToPrint({
    content: () => commonHref.current,
    documentTitle: "ema-data",
    onAfterPrint: () => toast.success("Print Successful!"),
  });

  const navigate = useNavigate();
  const handlePremiumButton = () => {
    navigate(`/checkOut/${id}`);
  };

  return (
    <div ref={commonHref} style={{ width: "100%", height: window.innerHeight }}>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <div className="flex justify-between bg-slate-400 items-center ">
        <p className="text-black m-1">Download data</p>
        <p className="m-1">
        <ArrowDownTrayIcon onClick={handlePrint} className="w-8 h-8 text-black"/>
        </p>

        </div>
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h1 className="text-2xl">{name}</h1>
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button onClick={handlePremiumButton} className="btn btn-primary">
              Get Premium Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
