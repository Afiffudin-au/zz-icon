import React from 'react'
import styles from './Pagenation.module.scss'
function Pagenation({
  page,
  handlePagenation,
}: {
  page: number
  handlePagenation: any
}) {
  return (
    <div className={styles.pagenation}>
      <div
        style={{ display: page === 1 ? 'none' : 'block' }}
        onClick={() => handlePagenation(page - 1)}
        className={styles.arrowBack}>
        <p>Previous</p>
      </div>
      <div>
        <p className={styles.pageNumber}>{page}</p>
      </div>
      <div
        onClick={() => handlePagenation(page + 1)}
        className={styles.arrowForward}>
        <p>Next</p>
      </div>
    </div>
  )
}

export default Pagenation
