import React from "react"
import CardImage from "ui/CardImage/CardImage"
import Info from "ui/CardInfo/Info"
import { Slide } from "model/interface"
import "./InnerCard.scss"

const InnerCard: React.FC<{ slide: Slide }> = ({ slide }) => {
  return (
    <div className="Card-container">
      <div className="Card">
        <div className="Card-content">
          <CardImage bgImage={slide?.bg_image} animate={true} />
          <Info
            title={slide.title}
            description={slide.description}
            style={{}}
          />
        </div>
      </div>
    </div>
  )
}

export default InnerCard
