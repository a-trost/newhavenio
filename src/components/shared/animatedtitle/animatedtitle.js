import React, { useCallback, useState, useEffect } from 'react';
import Typed from 'react-typed';
import shuffle from 'lodash/fp/shuffle';

import Title from 'components/shared/title';

const AnimatedTitle = () => {
  const [hasLooped, setHasLooped] = useState(false);
  const [techTerms, setTechTerms] = useState([
    // List created based on active Slack channels and commonly discussed topics -- can add more.
    // The carets are an additional delay in ms for short words.
    'AWS^100',
    'DevOps',
    'Docker',
    'interview prep',
    'Javascript',
    'Linux',
    'open source',
    'PHP^100',
    'Python',
    'R^300',
    'Ruby',
    'UX^200',
    'Vim^100',
    'data science',
  ]);

  const shuffleTerms = useCallback(() => setTechTerms(shuffle(techTerms)), []);
  const handleComplete = useCallback(() => {
    setHasLooped(true);
    shuffleTerms();
  }, []);

  // Randomize terms so order is different every mount. Note that 'tech' is not in here -- we always want it to be first.
  useEffect(() => {
    shuffleTerms();
  }, []);

  return (
    <Title as="h2" size="large" color="Whites.100" maxWidth="860px">
      Where{' '}
      <Typed
        // This component leverages caching, so this forces a cache reset once we loop
        key={hasLooped ? 0 : 1}
        backspaceFirst={!hasLooped}
        startDelay={hasLooped ? 0 : 2500}
        // Add 'tech' at the end for seamless looping, since we strip away the 'tech' in the DOM.
        strings={techTerms.concat('tech')}
        backDelay={1000}
        typeSpeed={50}
        backSpeed={35}
        onLastStringBackspaced={handleComplete}
        loop
      >
        {!hasLooped && <span>tech</span>}
      </Typed>
      <br />
      happens in New Haven
    </Title>
  );
};

export default AnimatedTitle;