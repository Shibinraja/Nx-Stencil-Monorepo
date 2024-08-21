// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import { MyComponent } from  '@nx-workspace/web-component-react'; 

export function App() {
  return (
    <div>
       <MyComponent first='Kybba' middle='India' last='Ltd'></MyComponent>
      <NxWelcome title="react-app" />
    </div>
  );
}

export default App;
