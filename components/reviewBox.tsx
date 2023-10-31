import React from 'react'

function ReviewBox() {
     return (
          <>
               <div key={i} className={`${styles.reviewBox}`}>
                    <div className={`${styles.reviewHeading}`}>
                         <div className={`${styles.reviewHead}`}>
                              <Image src={imgSrc} fill alt='' className={styles.reviewImg} />
                         </div>
                         <div className={styles.reviewHeadContent}>
                              <p>{name}</p>
                              <span>{job}</span>
                         </div>
                    </div>
                    <p className={`${styles.reviewContent}`}>{description} </p>
               </div>
          </>
     )
}

export default ReviewBox