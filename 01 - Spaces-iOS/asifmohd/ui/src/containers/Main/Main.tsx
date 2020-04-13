import React, { useEffect, useState, useContext } from "react"
import Flickity from "react-flickity-component"
import { BehaviorSubject, Subject } from "rxjs"
import { first, debounceTime } from "rxjs/operators"
import "./Main.scss"
import "styles/flickity.css"
import Card from "components/Card/Card"
import spaces from "model/spacesdata.json"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { store } from "store/store"
import { flickityOptions } from "utils/flickity-conf"

const imgRefList: HTMLImageElement[] = []
let flickityRef: Flickity

const flkityParallaxOnScroll = (imgRef) => {
  flickityRef.on("scroll", (e) => {
    const slides = flickityRef.slides as Array<any>
    slides.forEach((slide, i) => {
      let offset = (+(slide["target"] + flickityRef["x"]) * -1) / 3
      imgRef[i].style.transform = "translateX(" + offset + "px) scale(1.3) "
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
  const navBarToggleObs = new Subject<boolean>()

  const navBarTogglehandler = (state) => navBarToggleObs.next(state)

  const closeHandler = () => history.push("/")

  // set draggable state
  useEffect(() => {
    dispatch({ type: "NAVIGATE", payload: { match } })
    let isDraggable = !match.params.id
    if (flickityRef) {
      flickityRef["options"].draggable = isDraggable
      flickityRef["updateDraggable"]()
    }
  }, [match.params.id, dispatch, match])

  // calculate translateX distance
  useEffect(() => {
    if (flickityRef) {
      const eventHandler = new BehaviorSubject(0)
      const unSub = eventHandler.pipe(debounceTime(50)).subscribe((v) => {
        let sliderRef = flickityRef["slider"]
        let x = sliderRef.style.transform?.replace(/[^\d-.]/g, "")
        setX(x)
        console.log(x)
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
      const img = event.target
      console.log(event.type, img.src)
    })
    flickityRef.on("select", function (index) {
      setSelectedIndex(index)
    })
  }, [])

  useEffect(() => {
    navBarToggleObs.pipe(first()).subscribe((v) => {
      dispatch({ type: "TOGGLE NAVBAR", payload: v })
    })
  }, [navBarToggleObs, dispatch])

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
            i={i}
            navBarToggle={navBarTogglehandler}
            close={closeHandler}
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
