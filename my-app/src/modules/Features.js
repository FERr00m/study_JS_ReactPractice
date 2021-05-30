function SectionFeatures() {
  return (
    <section className="features">
      <div className="wrapper">
        <div className="features-wrapper">
          <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
          <div className="features-subhead">О нас</div>
          <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                                            сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
                                            оратору отточить.
          </div>
          <Slider/>
        </div>
      </div>
    </section>
  )
}


function Slider() {
  return (
    <div className="features-slider">
      <div className="features-slider_items">
        <SliderItem id="image-1" text="Первое целевое преимущество"/>
        <SliderItem id="image-2" text="Второе целевое преимущество"/>
        <SliderItem id="image-3" text="Третье целевое преимущество"/>
        <SliderItem id="image-4" text="Четвертое целевое преимущество"/>
      </div>
      <button className="features-slider-arrow features-slider-prev">
        <svg width="9" height="16"
            xmlns="http://www.w3.org/2000/svg">
          <path
              d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
          </path>
        </svg>
      </button>
      <button className="features-slider-arrow features-slider-next">
        <svg width="9"
            height="16" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
          </path>
        </svg>
      </button>
    </div>
  )
}


function SliderItem(props) {
  return (
    <div className="features-slider_item">
      <div className="features-img" id={props.id}></div>
      <div className="features-feature">{props.text}</div>
    </div>
  ) 
}

export default SectionFeatures;
