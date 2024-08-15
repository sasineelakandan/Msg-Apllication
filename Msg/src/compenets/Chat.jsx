import React from 'react'

const Chat = () => {
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <div className="w-1/4 bg-gray-100 border-r border-gray-300">
      <div className="p-4 text-xl font-bold">Chats</div>
      <div className="overflow-y-scroll h-full">
        <div className="p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            <div className="ml-3">
              <div className="font-semibold">John Doe</div>
              <div className="text-gray-600">Hey! How's it going?</div>
            </div>
          </div>
        </div>
        {/* Add more chat entries here */}
      </div>
    </div>

    {/* Chat Window */}
    <div className="flex-1 bg-white flex flex-col">
      <div className="p-4 border-b border-gray-300">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
          <div className="ml-3 font-semibold">John Doe</div>
        </div>
      </div>
      <div className="flex-1 overflow-y-scroll p-4">
        <div className="mb-4">
          <div className="text-gray-600">Hey! How's it going?</div>
        </div>
        {/* Add more messages here */}
      </div>
      <div className="border-t border-gray-300 p-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full border rounded-full px-4 py-2"
        />
      </div>
    </div>
  </div>
  )
}

export default Chat