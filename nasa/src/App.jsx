import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import { useEffect, useState } from "react"


function App() {
 
  const [showData, setShowData] = useState(null)
  const [showLoading, setShowLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  
  function handleDisplayModal(){
    setShowModal(!showModal)
  }

  useEffect(() => {

    async function fetchAPIData(){
      
      const NASA_KEY = import.meta.env.VITE_API_KEY
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}` 

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`

      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setShowData(apiData)
        return
      }
      localStorage.clear()


      try{
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setShowData(apiData)
      }
      catch(err){
        console.log(err.message)
      }

    }
    fetchAPIData()

  }, [])


  return (
    <>
      {showData ? (<Main showData={showData}/>) : (
        <div className="loadingState">
          <div className="loadingIcon">
            <i className="fa-solid fa-gear"></i>
          </div>
        </div>
      )}
    
      {showModal && (
        <SideBar showData={showData} showModal={showModal} handleDisplayModal={handleDisplayModal}/>
      )}
      { showData && (
        <Footer showData={showData} showModal={showModal} handleDisplayModal={handleDisplayModal}/>
      )}
    </>
  )
}

export default App
