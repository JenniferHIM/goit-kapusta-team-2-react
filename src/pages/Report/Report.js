import SwiperReport from "../../components/Swiper/SwiperReport";
import Accounting from "../../components/Accounting/Accounting";
import Chartjs from "../../components/Chartjs/Chartjs";

import styles from "./Report.module.scss";

function Report() {
  return (
    <>
      <div className={styles.categories}>
        <div className={styles.dataline}>
          <div className={styles.dataline_block_expenses}>
            <span className={styles.dataline_label}>Расходы:</span>
            <span className={styles.dataline_expenses}>-18 000.00</span>
          </div>
          <span className={styles.datalineJumper} />
          <div className={styles.dataline_block_income}>
            <span className={styles.dataline_label}>Доходы:</span>
            <span className={styles.dataline_income}>+45 000.00</span>
          </div>
        </div>
        <div className={styles.expencesBlock}>
          <SwiperReport />
          <Accounting />
        </div>
        <div className={styles.expencesBlock}>
          <div className={styles.chartBlock}>
            <Chartjs />
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
