import React from "react";
import BotImage from "../assets/chatbot-icon.png";
import { Chart } from "react-google-charts";
import Card from "./Card";
import Loader from "./Loader";
import ButtonActions from "./ButtonActions";

const ReceivedMessage = ({
  message,
  clickedSuggestions,
  refreshPage,
}) => {
  return (
    <div className="flex flex-col mx-4 bg-base-100 shadow-sm rounded-lg px-4">
      <div className="flex items-center">
        <img src={BotImage} alt="Bot Pic" className="w-8 h-8 rounded-lg" />
        <div className="p-4 rounded-lg sm:text-sm min-[280px]:text-xs">
          {message.text}
        </div>
      </div>

      <div>
        {message.topic && (
          <div className="divider divider-start text-xs text-base-content/70">
            {message.topic}
          </div>
        )}

        <div className="rounded-md bg-base-200">
          {message.chartData && (
            <div className="m-auto">
              <Chart
                chartType={message.chartType}
                width="100%"
                height="300px"
                loader={<Loader />}
                data={message.chartData}
                options={{
                  title: message.topic,
                  pieHole: 0.4,
                  is3D: false,
                }}
              />
            </div>
          )}
          {message.responseData && (
            <div className="flex flex-col gap-4 mt-4">
              {message.tips}
              {message.responseData.map((item, index) => (
                <Card key={index} title={item.title} body={item.body} />
              ))}
            </div>
          )}
        </div>
          <ButtonActions
            exportData={clickedSuggestions.length !== 8 ? true : false}
            refreshPage={refreshPage}
          />
      </div>
    </div>
  );
};

export default ReceivedMessage;
