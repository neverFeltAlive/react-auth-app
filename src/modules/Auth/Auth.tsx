import { TabPanel, TabView } from 'primereact/tabview';

import { AuthForm } from './components';

export const Auth = () => {
  return (
    <div className="flex w-full items-center justify-center h-full my-10">
      <TabView className="w-fit">
        <TabPanel header="Sign In">
          <AuthForm isSignUp={false} />
        </TabPanel>
        <TabPanel header="Sign Up">
          <AuthForm isSignUp={true} />
        </TabPanel>
      </TabView>
    </div>
  );
};
