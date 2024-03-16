

function App() {
  return (
    <div className="bg-[#F5F6FA] h-screen">
      <div className="w-[675px] m-auto p-5">
        <div className="w-full flex bg-white rounded-md p-3 gap-5">
          <div className="bg-[#F6F8F6] flex flex-col justify-center items-center rounded-md p-2 gap-1">
            <div className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-3 h-3 text-[#5358B6] opacity-70 font-bold">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <h3 className="font-medium text-[#5358B6] text-sm">12</h3>
            <div className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-3 h-3 text-[#5358B6] opacity-70"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" /></svg>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex justify-between items-center">
              <div className="w-full flex gap-4 items-center">
                <div >
                  <img className="w-7 h-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <h1 className="font-medium text-black text-base">amyrobson</h1>
                <p className="text-gray-400">1 month ago</p>
              </div>
              <div className="cursor-pointer flex gap-1 items-center">
                <div>
                  <svg fill="#5358B6" className="w-3 h-3" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512" enable-background="new 0 0 512 512" >
                    <path d="M185.2,128.6V19.7L0,204.9l185.2,185.2V281.1c152.5,0,250.5,0,326.8,217.9C512,390.1,522.9,128.6,185.2,128.6z" />
                  </svg>
                </div>
                <p className="font-medium text-[#5358B6] text-sm">Reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
