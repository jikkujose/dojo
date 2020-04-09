import React, { useEffect, useState, useContext } from "react"
import Flickity, { FlickityOptions } from "react-flickity-component"
import { BehaviorSubject, interval } from "rxjs"
import { debounce } from "rxjs/operators"
import "./Main.scss"
import "styles/flickity.css"
import Card from "components/Card/Card"
import spaces from "model/spacesdata.json"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { store } from "store/store"

const flickityOptions: FlickityOptions = {
  initialIndex: 0,
  imagesLoaded: true,
  cellAlign: "center",
  pageDots: false,
  prevNextButtons: false,
  lazyLoad: 3,
  draggable: true,
}

const imgRefList: HTMLImageElement[] = []
let flickityRef: Flickity

const flkityParallaxOnScroll = (imgRef) => {
  flickityRef.on("scroll", (e) => {
    const slides = flickityRef.slides as Array<any>
    slides.forEach((slide, i) => {
      let offset = (+(slide["target"] + flickityRef["x"]) * -1) / 3
      imgRef[i].style.transform = "translateX(" + offset + "px) scale(1.3) "
      // if (i === 0) console.log(i, imgRef[i].style.transform)
      // let transArr = imgRef[i].style.transform
      //   .split(" ")
      //   .map((v) => v.replace(/[^\d-.]/g, ""))
      // imgRef[i].style.transform = `translateX(${
      //   transArr[0] + offset
      // }px) translateY(${transArr[1]}px) translateZ(${transArr[2]}px)`
    })
  })
}

const scrollHandler = (imgRef: HTMLImageElement) => {
  if (flickityRef && imgRef) {
    imgRefList.push(imgRef)
    if (imgRefList.length === spaces.length) flkityParallaxOnScroll(imgRefList)
  }
}

const Main = ({ match, history }) => {
  const { dispatch } = useContext(store)
  const [x, setX] = useState(20.71)
  const [SelectedIndex, setSelectedIndex] = useState(0)

  // set draggable state
  useEffect(() => {
    dispatch({ type: "NAVIGATE", payload: { match } })
    let isDraggable = !match.params.id
    console.log("isDraggable", isDraggable)
    if (flickityRef) {
      flickityRef["options"].draggable = isDraggable
      flickityRef["updateDraggable"]()
    }
  }, [match.params.id, dispatch, match])

  // calculate translateX distance
  useEffect(() => {
    if (flickityRef) {
      const eventHandler = new BehaviorSubject(0)
      const unSub = eventHandler
        .pipe(debounce((ev) => interval(10)))
        .subscribe((v) => {
          let sliderRef = flickityRef["slider"]
          let x = sliderRef.style.transform?.replace(/[^\d-.]/g, "")
          console.log(x)
          setX(x)
        })
      const calcX = (e) => {
        eventHandler.next(e)
      }

      flickityRef.on("scroll", calcX)
      return () => {
        flickityRef.off("scroll", calcX)
        unSub.unsubscribe()
      }
    }
  }, [])

  // lazy load images & get current selected slide index
  useEffect(() => {
    flickityRef.on("lazyLoad", function (event) {
      var img = event.target
      console.log(event.type, img.src)
    })
    flickityRef.on("select", function (index) {
      setSelectedIndex(index)
    })
  }, [])

  return (
    <main>
      <Flickity
        flickityRef={(ref) => (flickityRef = ref)}
        className={"carousel"}
        elementType={"div"}
        options={flickityOptions}
      >
        {spaces.map((space, i) => (
          <Card
            space={space}
            key={space.id}
            onScroll={scrollHandler}
            isSelected={match.params.id === space.id}
            translateX={x}
            selectedIndex={SelectedIndex === i}
          />
        ))}
      </Flickity>
    </main>
  )
}

const MainRoute = () => (
  <Router>
    <Route path={["/:id", "/"]} component={Main} />
  </Router>
)

export default MainRoute
