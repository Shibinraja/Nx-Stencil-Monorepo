// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { MyComponent } from  '@nx-workspace/web-component-react'; 

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <MyComponent first='Kyyba' middle='Tech' last='India'></MyComponent>
      <NxWelcome title="react-app" />
    </div>
  );
}

export default App;
