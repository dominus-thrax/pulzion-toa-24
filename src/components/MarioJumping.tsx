import Image from 'next/image';
import styles from './MarioJumping.module.css'; // Import the CSS module

const MarioJumping = () => {
  return (
    <div className={styles.container}>
      {/* Mario jumping animation */}
      <div className={styles.mario}>
        <Image
          src="/Game-Evolution/mario-jumping.png" // Adjust the path to your Mario image
          alt="Mario"
          width={50}
          height={50}
        />
      </div>

      {/* Blocks */}
      <div className={styles.blocks}>
        <Image
          src="/Game-Evolution/mario-block.png" // Adjust the path to your blocks image
          alt="Blocks"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.blocks2}>
        <Image
          src="/Game-Evolution/mario-block.png" // Adjust the path to your blocks image
          alt="Blocks"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.blocks3}>
        <Image
          src="/Game-Evolution/mario-block.png" // Adjust the path to your blocks image
          alt="Blocks"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.blocks4}>
        <Image
          src="/Game-Evolution/mario-block.png" // Adjust the path to your blocks image
          alt="Blocks"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.blocks5}>
        <Image
          src="/Game-Evolution/mario-block.png" // Adjust the path to your blocks image
          alt="Blocks"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default MarioJumping;
