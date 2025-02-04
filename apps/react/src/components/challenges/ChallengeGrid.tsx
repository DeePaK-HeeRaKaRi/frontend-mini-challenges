import { reactChallenges } from '@fmc/data/content';
import { contributors } from '@fmc/data/content';
import { AvatarGroup } from './Avatar';
import styles from './challenge-grid.module.scss';

function ChallengeGrid() {
  return (
    <div className={styles.challengeGrid}>
      {Array.from(reactChallenges.values()).map((challenge) => (
        <a
          key={challenge.title}
          className={`${styles.challengeCard} ${styles[challenge.difficulty]}`}
          href={'#/' + challenge.link}
        >
          {challenge.isNew && <span className={styles.new}>New</span>}
          <div>
            <h3>{challenge.title}</h3>

            <div className={styles.avatarContainer}>
              {challenge.developer && (
                <div className={styles.developer}>
                  <img src={contributors.get(challenge.developer)?.pic} alt="" />
                  <span className={styles.name}>{contributors.get(challenge.developer)?.name}</span>
                </div>
              )}
              {challenge.contributors && <AvatarGroup contributorNames={challenge.contributors} />}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default ChallengeGrid;
