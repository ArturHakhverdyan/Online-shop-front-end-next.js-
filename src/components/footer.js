import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import { footerData } from "../static_data";

const Footer = () => {

  
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.infoLeftSide}>
          <div className={styles.informSide}>
            <img unoptimized='true' src="/country.png" className={styles.country}  />
            <p className={styles.footerText}>
              Sign up for texts to be notified about <br /> our best offers on the
              perfect gifts.
            </p>
          </div>
        </div>
        <div className={styles.infoRightSide}>
          {footerData.map((item) => (
            <ul key={item.id}>
              <li className={styles.title}>{item.title}</li>
              {item.childrens.map((i,index) => (
                <Link href={i.path} key= {index} >
                <li key={i.id} className={styles.li}>{i.name}</li>
                </Link>
              ))
            }
            </ul>
          ))}
        </div>
      </div>
      <div className={styles.footerEnd}>
        <div>
          <span>
            <strong>Made BY :</strong> Azwedo {""}
          </span>
          <img unoptimized='true' src="/arrow.png"  className={styles.footImg1}  />
        </div>
        <div>
          <span>
            <strong>Powered by :</strong> Webflow {""}
          </span>
          <img unoptimized='true' src="/arrow.png" className={styles.footImg1}  />
        </div>
      </div>
    </div>
  );
};
export default Footer;
