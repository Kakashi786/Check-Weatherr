import React from 'react'
import { TiWeatherSunny } from 'react-icons/ti';
import {WiSunset} from 'react-icons/wi'
import {BsFillCloudRainFill, BsSpeedometer} from 'react-icons/bs'
import {AiOutlineCompress} from 'react-icons/ai'

const Card = (props) => {
    const { temp,
        humidity,
        pressure,
        mood,
        name,
        speed,
        country,
        sunset,} = props.tempInfo
        let sec = sunset;
        let date = new Date(sec*1000)
        let timeStr = `${date.getHours()}:${date.getMinutes()}`
  return (
     <>
          <article className='widget'>
            <div className='weatherIcon'>
              <TiWeatherSunny/>
            </div>
            <div className='weatherInfo'>
                <div className='temperature'>
                    <span>{temp}&deg;</span>
                </div>
                <div className='description'>
                    <div className='weatherCondition'>
                        sunny
                    </div>
                    <div className='place'>
                        {name},{country}
                    </div>
                </div>
            </div>
            <div className='date'>{new Date().toLocaleString()}</div>
             {/* four coloumn section */}
             <div className='extra-temp'>
                  <div className='temp-info-minmax'>
                      <div className='two-sided-section'>
                        <p><WiSunset/></p>
                        <p className='extra-info-leftside'>
                            {timeStr} PM <br/>
                            Sunset
                        </p>
                      </div>
                      <div className='two-sided-section'>
                        <p><BsFillCloudRainFill/></p>
                        <p className='extra-info-leftside'>
                             {humidity}  <br/>
                            Humidity
                        </p>
                      </div>
                      
                      
                  </div>
                  <div className='weather-extra-info'>
                  <div className='two-sided-section'>
                        <p><AiOutlineCompress/></p>
                        <p className='extra-info-leftside'>
                            {pressure}  <br/>
                            pressure
                        </p>
                      </div>
                      <div className='two-sided-section'>
                        <p><BsSpeedometer/></p>
                        <p className='extra-info-leftside'>
                            {speed}  <br/>
                            Speed
                        </p>
                      </div>
                  </div>
             </div>
        </article>
     </>
  )
}

export default Card