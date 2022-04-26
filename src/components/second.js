import React from "react"
import { StaticImage } from "gatsby-plugin-image"


export default function Second({ children }) {
  return (
      <div className="second">
      <div className="paragraph-title">
          <p>Наши услуги</p>
      </div>
        <div className="body-back">
            <div className="services-container">
                <div className="service-row">
                    <div className="service-card col-lg-3">
                        <p className="service-card-title">Онлайн покупка недвижимости</p>
                        
                        <StaticImage
                            src="../images/services/unsplash_Hcfwew744z4.png"
                            width={300}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                        />
                    </div>
                    <div className="service-card col-lg-3">
                        <p className="service-card-title">Консультация и подбор недвижимости</p>
                        
                        <StaticImage
                            src="../images/services/unsplash_HJckKnwCXxQ.png"
                            width={300}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                        />
                    </div>
                    <div className="service-card col-lg-3">
                        <p className="service-card-title">Организация тура для клиентов</p>
                        
                        <StaticImage
                            src="../images/services/unsplash_Q59HmzK38eQ.png"
                            width={300}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                        />
                    </div>
                    <div className="service-card col-lg-3">
                        <p className="service-card-title">Безопасный перевод денежных средств</p>
                        
                        <StaticImage
                            src="../images/services/unsplash_dRHE-XF7wls.png"
                            width={300}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                        />
                    </div>
                </div>
            </div>
                <div className="bottom-triangles">
                    <div className="left-triangle"></div>
                    <div className="right-triangle"></div>
                </div>
        </div>    
      </div>

  )
}
