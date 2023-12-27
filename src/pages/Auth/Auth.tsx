import { useAuthentication } from 'hooks/useAuthentication.ts';
import { Button } from 'primereact/button';

export const Auth = () => {
  const [, setIsAuthorized] = useAuthentication();

  return (
    <div>
      <Button onClick={() => setIsAuthorized(true)}>Login</Button>
    </div>
  );
};
