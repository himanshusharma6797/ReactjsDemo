import React from 'react'
import styles from './Carousel.module.css'

export default function CarouselItem() {
  return (
    <>
    <div className={styles.imgOuter}>
    <div className={styles.item}>
      <div className={styles.heading}>
      Lorem ipsum
      </div>
      <div className={styles.para}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      </div>
        <div className={styles.button}>
          Know More <span>&gt;</span>
        </div>
    </div>
    </div>
    </>
  )
}
