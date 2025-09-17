import { useState } from 'react'
import './App.css'
import hellsing from './assets/pumal.png'
import HP from './assets/new balance.png'
import React from 'react'
import HxH from './assets/dn.png'
import Slider1 from './assets/1.jpg'
import Slider2 from './assets/2.jpg'
import Slider3 from './assets/3.jpg'
import Slider4 from './assets/4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
        <Swiper
        modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
    autoplay={{
      delay:3000,
      disableOnInteraction:false,
  }}
loop={true}
className='mySwiper'
    >
      <SwiperSlide>
        <img src={Slider1} alt='slide1' />
      </SwiperSlide>
      <SwiperSlide>
      <img src={Slider2} alt='Slide 2' />
      </SwiperSlide>
      <SwiperSlide> <img src={Slider3} alt='slide3' />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlide> <img src={Slider4} alt='slide3' />
         </SwiperSlide>
      <SwiperSlide></SwiperSlide>
      </SwiperSlide>
    </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={hellsing} alt="" className="img-card" />
              <h2 className="titulo-card">Puma suede xl</h2>
              <p className="desc">Nova coleção da puma</p>
              <p className="preco">R$ 499,99</p>
              <div className="avaliacao"> ★ ★ ★ ★ ☆</div>
             
            </div>
          </a>

          {/* Produto 2 */}
          <a header="#" className="img-card">
          <div className="card">
            <img src={HP} alt="" className="img-card" />
            <h2 className="titulo-card">New Balance 550</h2>
            <p className="desc">Da Serie de tenis 500</p>
            <p className="preco">R$ 250,00</p>
            <div className="avaliacao"> ★ ★ ★ ★ ★</div>
            
          </div>
          </a>
          {/* Produto 3 */}
          <a header="#" className="link-card">
            <div className="card">
              <img src={HxH} alt="" className="img-card" />
              <h2 className="titulo-card">Airmax Dn</h2>
              <p className="desc">Nova Coleção Airmax (estão como novos)</p>
              <p className="preco">R$  ̶(2̶.̶2̶5̶0̶,̶0̶0̶) 2.025,00</p>
              <div className="avaliacao"> ★ ★ ★ ★ ★</div>
              <div className="off">- 10%</div>
            </div>
          </a>
        </section>
        <section className="destaque">

        <iframe src="https://www.youtube.com/embed/p7cDN1ofIw0?autoplay=1&mute=1&controls=0&loop=1&playlist=p7cDN1ofIw0&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>
</section>
        <footer>
    <img src="" alt="" className="logo footer" />

<div className="social-icons">

  <div className="icon">
    <img src="" alt="" id="instagran" />
  </div>

  <div className="icon">
    <img src="" alt="" id="discord" />
  </div>

  <div className="icon">
     <img src="" alt="" id="X" />
  </div>
  
  <div className="icon"></div>
  <img src="" alt="" id="youtube  " />
</div>

        </footer>
      </main>
    </>
  )
}

export default App
