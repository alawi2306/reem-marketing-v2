import React from 'react'

const Form = () => {
    return (
      <div className="flex justify-center items-center h-screen m-16" style={{marginTop: '200px'}}>
        <form className="w-2/3 flex flex-col items-center p-8 border border-gray-300 rounded-md shadow-md">
          <h1 className="text-2xl font-medium mb-4">Contact Us</h1>
          <input className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md" type="text" name="" id="" placeholder="Enter name" />
          <input className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md" type="email" name="" id="" placeholder="Enter email" />
          <input className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md" type="phone" name="" id="" placeholder="Enter your number" />
          <textarea className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md" name="message" id="" cols="30" rows="3" placeholder="Type in your message"></textarea>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">Submit</button>
        </form>
      </div>
    );
  };
  

export default Form;

