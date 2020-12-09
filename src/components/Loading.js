import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'

const Loading = () => {
  return (
    <div>
      <Dimmer active inverted>
       <Loader size='big' inverted content='Loading' />
      </Dimmer>
    </div>
  );
}

export default Loading;
