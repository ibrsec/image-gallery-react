
import './App.css'
import Content from './content.jsx'; 
import Header from './header.jsx';
import { imagesData } from './data';
import axios from 'axios';
import { useState,useEffect } from 'react';

const BASE_URL = "https://api.unsplash.com/photos/random?count=21";
function App() {


  




  const [imagesApi, setImagesApi] = useState("")

  const getImages = async() => { 
    const options = { 
      method:"GET",
      headers:{
          Authorization: "Client-ID kaSC0SZ88K0dOpjnT3N3coM2A8-EQlQk2iX82pMdMtM"
      }
    };

//     const getImagesJson = await(await fetch(`https://api.unsplash.com/photos/random?count=21`,{ 
//       method:"GET",
//       headers:{
//           Authorization: "Client-ID a-R859OJIzz0JCRHXvxcf2pIkaGKJCtomb0MPaaEOAA"
//       }
//     })).json();
// console.log(getImagesJson);


const response = await axios.get(BASE_URL,options);
setImagesApi(response.data) 
  }

  useEffect(() => {
  getImages();

  }, [])


console.log(imagesApi); 

  return (
    <div>
      <Header />
      <section id="content">
      <div className="container"> 
        
        {
          [...imagesApi].map((item,index) => (
            <a href={item.links.html} key={item.id} target='_blank' className='card-link'> 

              <Content key={item.id} imgUrl={item.urls.small} title={item.user.name}/>
            </a>
          ))
        }
      </div>
    </section>
    </div>
  )
}

export default App
