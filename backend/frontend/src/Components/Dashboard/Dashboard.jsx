import React from 'react'

const Dashboard = ({ email, firstName, lastName, photoUrl }) => {
  return (
    <div className='Dashboard'>
      <section className="p-6 md:p-12 text-center md:text-left " 
      // style={{ backgroundImage: "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.jpg)"}}
      >
        <div className="flex items-center justify-center mt-6 md:mt-16">
          <div className="max-w-3xl">
            <div className="block p-6 rounded-lg shadow-lg bg-white m-4">
              <div className="md:flex md:flex-row">
                <div
                  className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0"
                >
                  <img
                    src={photoUrl ? photoUrl : "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"}
                    className="rounded-full shadow-md"
                    alt="woman avatar"
                  />
                </div>
                <div className="md:ml-6 flex justify-center items-center flex-col">
                  <p className="text-gray-500 font-light mb-6">
                    Welcome back, <span className="font-semibold text-xl mb-2 text-gray-800">{`${firstName} ${lastName}`}</span>
                  </p>
                  
                  <p className="font-semibold text-gray-500 mb-0">{email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard