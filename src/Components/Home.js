import React from 'react'
import Header from '../Partials/Header'
import Cards from './cards'

export default function Home() {
  return (
    <>
    <Header />

    <section style={{backgroundImage: "url(/images/homebg.png)", backgroundSize: "cover", height: "768px", marginTop: "-78px"}}>
      <div className="container">
        <div className="row" style={{paddingTop: "9rem"}}>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="home">
              <div className="home-head mb-4">
                <h1>We <span style={{color: "#EB4775"}}>Celebrate</span></h1>
              </div>
              <div className="head-paragrapgh mb-4">
                <p>Delivering kickass Entertainment at your doorstep!</p>
              </div>
              <div className="waitlist-btn">
                <button type="submit">Join the Waitlist</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home-img">
              <img src='/images/homecar.png'/>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    <Cards/>

    <section>
      <div className="container mt-15">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="hood-head mb-5">
              <h2>Under the Hood</h2>
            </div>
            <div className="hood-list">
              <ul>
                <li>
                  <div className="hood-tick">
                    <img src='/images/tick.png'/>
                  </div>
                  <div className="hood-paragrapgh">
                    <p>4 Sony PS4s with multiple controllers </p>
                  </div>
                </li>
                <li>
                  <div className="hood-tick">
                    <img src='/images/tick.png'/>
                  </div>
                  <div className="hood-paragrapgh">
                    <p>Rich library of latest games for all ages </p>
                  </div>
                </li>
                <li>
                  <div className="hood-tick">
                    <img src='/images/tick.png'/>
                  </div>
                  <div className="hood-paragrapgh">
                    <p>4 Sony PS4s with multiple controllers </p>
                  </div>
                </li>
                <li>
                  <div className="hood-tick">
                    <img src='/images/tick.png'/>
                  </div>
                  <div className="hood-paragrapgh">
                    <p>2 Occulus Quest 2 VR headsets </p>
                  </div>
                </li>
                <li>
                  <div className="hood-tick">
                    <img src='/images/tick.png'/>
                  </div>
                  <div className="hood-paragrapgh">
                    <p>Climate controlled cabin with surround sound and glow lights</p>
                  </div>
                </li>
                <li>
                  <div className="hood-tick">
                    <img src='/images/tick.png'/>
                  </div>
                  <div className="hood-paragrapgh">
                    <p>Board Games, Karaoke and DJ set </p>
                  </div>
                </li>
                <li>
                  <div className="hood-tick">
                    <img src='/images/tick.png'/>
                  </div>
                  <div className="hood-paragrapgh">
                    <p>Truck mounted movie screen</p>
                  </div>
                </li>
                <li>
                  <div className="hood-tick">
                    <img src='/images/tick.png'/>
                  </div>
                  <div className="hood-paragrapgh">
                    <p>Can accomodate up to 16 players</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hood-img">
              <img src='/images/underhood.png' width={710} height={580}/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='p-5'>
      <div className="container mt-15 mb-15" style={{backgroundImage: "url(/images/loginbg.png)", backgroundSize: "cover", height: "510px"}}>
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center" style={{padding: "5rem"}}>
            <div className="join-img">
              <img src='/images/birthdayicon.png' height={76} width={76}></img>
            </div>
            <div className="join-head">
              <h2>Join the Waitlist to <br/> get Early Bird <br/>Discounts!</h2>
            </div>
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center" style={{padding: "5rem"}}>
            <form>
              <div className="join-form d-flex flex-column justify-content-end">
                <input type="text" placeholder='Full Name'/>
                <input type="email" placeholder='Email'/>
                <input type="tel" placeholder='Mobile Number'/>
              </div>
              <div className="join-btn d-flex justify-content-end mt-3">
                  <button type='submit'>Join Now</button>
                </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container mt-15">
        <div className="row">
          <div className="col-lg-7">
            <div className="throw-img">
              <img src='/images/girls.png'/>
            </div>
          </div>
          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <div className="throw-head">
              <h2>Throw a kickass party hassle-free</h2>
            </div>
            <div className="throw-btn">
              <button type='submit'>Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
