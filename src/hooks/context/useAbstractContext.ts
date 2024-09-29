import { useContext, Context } from 'react';

export const useAbstractContext = <T>(context: Context<T | undefined>) => {
  const contextValue = useContext(context);
  if (contextValue === undefined) {
    throw new Error(
      `useAbstractContext must be used within a ${context.displayName}Provider`
    );
  }
  return contextValue;
};