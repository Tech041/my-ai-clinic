import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { context } from "../../context/Contex";
import { Link } from "react-router-dom";

const card = " w-full md:w-auto border-2  px-4 py-2 rounded-2xl";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(context);
  return (
    <div className="main flex-1 px-5  pb-5 relative ">
      <div className="mt-5 py-5">
        <Link className="py-2 px-4 bg-blue-600 text-white rounded-full" to={'/'}>
        BACK TO HOME
        </Link>
      </div>
      <div className="nav flex justify-between items-center p-5">
        <p className="text-green-600 ">Pharm Nelson</p>
        <img src={assets.user_icon} alt="" className="w-10 rounded-[50%]" />
      </div>
      <div className="main-container max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className="greet my-[50px] p-5 ">
              <p className="">
                <span className="text-3xl font-semibold text-blue-700">Hello, dear...</span>
              </p>
              <p className="py-1">Am glad to have you!!</p>
            </div>
            <div className="cards flex flex-col md:flex-row justify-center items-center gap-4">
              <div className={card}>
                <p className="">Ask me anything concerning health.</p>
                <img src={assets.compass_icon} alt="" className="" />
              </div>
              <div className={card}>
                <p className="">I may not be 100% right always.</p>
                <img src={assets.bulb_icon} alt="" className="" />
              </div>
              <div className={card}>
                <p className="">
                  Am gald to have you in my clinic,how can I help you?.
                </p>
                <img src={assets.message_icon} alt="" className="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result text-gray-600 overflow-y-scroll">
            <div className="result-title flex items-center gap-4">
              <img
                src={assets.user_icon}
                alt=""
                className="w-10 rounded-[50%]"
              />
              <p className="text-xl font-semibold text-black">{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-4">
              {/* <img src={assets.gemini_icon} alt="" /> */}
              {loading ? (
                <div className="loader w-[100%] flex flex-col gap-[10px]">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="font-[300] py-5 text-[17px] leading-[1.8]"
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom   mt-20 px-4">
          <div className="search-box flex py-4 px-4 border-2 rounded-3xl  ">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              className=" w-full  focus:outline-none "
              placeholder="Enter a prompt here ..."
            />
            <div className=" flex items-center justify-center px-3 ">
              <img
                onClick={() => onSent()}
                src={assets.send_icon}
                alt=""
                width={20}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
