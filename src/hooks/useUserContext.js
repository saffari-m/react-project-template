import { useContext } from 'react';
import { UserContext } from '@context/user-context';
function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within UserProvider');
  }
  return context;
}
export default useUserContext;
