import React from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { Button, Switch, useTheme } from '@nextui-org/react';

const Home = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <div>
      <Button shadow color="gradient" auto>
        Gradient
      </Button>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </div>
  );
};

export default Home;
