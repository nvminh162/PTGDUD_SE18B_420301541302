import { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import { Search, MoreVertical, Phone, Video, Star, Send } from 'lucide-react'

export default function Messages() {
  const [activeChat, setActiveChat] = useState(1);
  
  const contacts = [
    { id: 1, name: 'Sarah Johnson', message: 'Hey, how are you doing?', time: '10:42 AM', unread: 2 },
    { id: 2, name: 'Alex Thompson', message: 'The meeting is at 3pm today', time: '9:30 AM', unread: 0 },
    { id: 3, name: 'Mike Wilson', message: "I've sent you the report", time: 'Yesterday', unread: 0 },
    { id: 4, name: 'Emily Davis', message: 'Can we discuss the project?', time: 'Yesterday', unread: 1 },
    { id: 5, name: 'David Moore', message: 'Thanks for your help!', time: 'Monday', unread: 0 },
  ];
  
  const messages = [
    { id: 1, sender: 'Sarah', time: '10:30 AM', content: 'Hi there! How are you today?', isMe: false },
    { id: 2, sender: 'Me', time: '10:32 AM', content: "I'm good, thanks for asking! How about you?", isMe: true },
    { id: 3, sender: 'Sarah', time: '10:34 AM', content: 'Doing well! Just finishing up some work. Are we still meeting later?', isMe: false },
    { id: 4, sender: 'Me', time: '10:36 AM', content: "Absolutely! I'll see you at the coffee shop at 2pm.", isMe: true },
    { id: 5, sender: 'Sarah', time: '10:37 AM', content: 'Perfect! Looking forward to it.', isMe: false },
    { id: 6, sender: 'Sarah', time: '10:42 AM', content: 'Oh, and can you bring those documents we discussed?', isMe: false },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Contact List */}
        <div className="w-1/3 border-r border-gray-200 bg-white">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
              />
            </div>
          </div>
          
          <div className="overflow-y-auto" style={{height: 'calc(100% - 73px)'}}>
            {contacts.map(contact => (
              <div 
                key={contact.id}
                onClick={() => setActiveChat(contact.id)}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${activeChat === contact.id ? 'bg-gray-50' : ''}`}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-medium">
                    {contact.name.charAt(0)}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{contact.name}</h3>
                      <span className="text-xs text-gray-500">{contact.time}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <p className="text-sm text-gray-600 truncate">{contact.message}</p>
                      {contact.unread > 0 && (
                        <span className="inline-flex items-center justify-center w-5 h-5 text-xs bg-pink-500 text-white rounded-full">
                          {contact.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-md font-medium">
                S
              </div>
              <div className="ml-3">
                <h3 className="font-medium">Sarah Johnson</h3>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Phone size={18} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Video size={18} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Star size={18} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical size={18} className="text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              {messages.map(message => (
                <div key={message.id} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs md:max-w-md rounded-lg p-3 ${message.isMe ? 'bg-pink-500 text-white' : 'bg-white border'}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-sm">{message.sender}</span>
                      <span className="text-xs opacity-75">{message.time}</span>
                    </div>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 border-t">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 border rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" 
              />
              <button className="bg-pink-500 text-white px-4 rounded-r-md hover:bg-pink-600">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}