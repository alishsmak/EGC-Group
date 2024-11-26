import styles from "@styles/index.module.scss";
import Layout from "@components/Layout/Layout";
import { Text } from "@components/Text";
import Image from "next/image";
import face from "@assets/face.png";

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        <div className={styles.face}>
          <Image src={face} alt="" />
          <div className={styles.faceText}>
            <Text variant="semibold" size="header2">
              Градостроительство, архитектура и ландшафтный дизайн
            </Text>
            <Text variant="medium" size="body1">
              Наша команда найдет самые лучшие решения для вашего проекта.
            </Text>
          </div>
        </div>
      </div>
    </Layout>
  );
}
