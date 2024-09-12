import Image from 'next/image';
import styles from './MarioJumping.module.css'; // Import the CSS module
import Particles from '../magicui/particles';

const MarioJumping = () => {
  return (
    <div className={styles.container}>
      {/* Mario jumping animation */}
      <Particles
        className="fixed inset-0"
        quantity={100}
        size={1.0}
        ease={80}
        color='#ffffff'
        refresh
      />
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
