import React from "react";
import { RiChatSettingsFill, RiAddCircleFill } from "react-icons/ri";

const notifications = [
  { id: 1, title: "Your Order Has Been Confirmed", sender: "System" },
  { id: 2, title: "Added New Product", sender: "Safal" },
  { id: 3, title: "Your Order Has Been Confirmed", sender: "System" },
  { id: 4, title: "Added New Product", sender: "Safal" },
  { id: 5, title: "Your Order Has Been Confirmed", sender: "System" },
  { id: 6, title: "Added New Product", sender: "Safal" },
  { id: 7, title: "Added New Product", sender: "Safal" },
  { id: 8, title: "Added New Product", sender: "Safal" },
  { id: 9, title: "Added New Product", sender: "Safal" },
  { id: 10, title: "Added New Product", sender: "Safal" },
  { id: 11, title: "Added New Product", sender: "Safal" },
];

function Notification() {
  return (
    <div className="bg-gray-100 p-4 w-[500px] h-[660px] shadow-md overflow-y-auto">
      <div className="max-h-full">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center bg-white shadow-lg mb-2 p-4 rounded-lg"
          >
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-full ${
                notification.sender === "System"
                  ? "bg-blue-500"
                  : "bg-green-500"
              } flex justify-center items-center`}
            >
              {notification.sender === "System" ? (
                <RiChatSettingsFill className="text-white text-2xl" />
              ) : (
                <RiAddCircleFill className="text-white text-2xl" />
              )}
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold">{notification.title}</p>
              <p className="text-xs text-gray-600">{notification.sender}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
