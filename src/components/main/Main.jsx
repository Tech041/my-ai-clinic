import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { context } from "../../context/Contex";

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
      <div className="nav flex justify-between p-5">
        <p className="">Pharm Nelson</p>
        <img src={assets.user_icon} alt="" className="w-10 rounded-[50%]" />
      </div>
      <div className="main-container max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className="greet my-[50px] p-5 ">
              <p className="">
                <span className="text-3xl font-semibold">Hello, Dear</span>
              </p>
              <p className="">Ask me anything !!</p>
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
              <p className="">{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-4">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader w-[100%] flex flex-col gap-[10px]">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="font-[300] text-[17px] leading-[1.8]"
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom   my-10 px-4">
          <div className="search-box flex py-4 px-4 border-2 rounded-3xl  ">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              className=" w-full  focus:outline-none "
              placeholder="Enter a prompt here ..."
            />
            <div className="flex  ">
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
