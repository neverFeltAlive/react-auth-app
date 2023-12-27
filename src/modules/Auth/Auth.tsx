import { TabPanel, TabView } from 'primereact/tabview';

import { SignInForm, SignUpForm } from './components';

export const Auth = () => {
  return (
    <div className="flex w-full items-center justify-center h-full my-10">
      <TabView className="w-fit">
        <TabPanel header="Sign In">
          <SignInForm />
        </TabPanel>
        <TabPanel header="Sign Up">
          <SignUpForm />
        </TabPanel>
      </TabView>
    </div>
  );
};
