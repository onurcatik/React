import React from 'react';

function ComponentWithError() {
  throw new Error("Intentional Error");
  return <div>This text will not be displayed.</div>;
}

export default ComponentWithError;
