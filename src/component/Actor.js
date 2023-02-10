import { Link,useParams} from "react-router-dom";
import  {useEffect, useState } from 'react'
import axios from 'axios';

function Actor() {

const {actorId} = useParams();

const url=`https://imdb-api.com/en/API/Name/k_51uur76b/${actorId}`


const [data, setdata] = useState();

useEffect(() => {

    function fun1() {
    const response =  axios.get(url)

    setdata(response.data)
  }

  fun1();

},[url])


  return (
    <div>
    <div className='actorCircle'>
        <img src={data?.image} alt='actor' />
    </div>
    <div className='actorDetails'>
        <h1>{data?.name}</h1>
        <h5>{data?.role}</h5>
        <p>{data?.summary}</p>
        <h2>{data?.awards}</h2>
    </div>
    <div className='actorMovies'>
        <div className='actorCard'>
            <Link to={`/movie`}>
            <img  alt='movie'/>
            <h3>title</h3>
            </Link>
        </div>
           
       
    </div>
</div>
  )
}

export default Actor
