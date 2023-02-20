import React, { useState } from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider, MantineThemeOverride, Tabs } from '@mantine/core';
import { Example_1 } from './example_1/example_1';
import { Example_2 } from './example_2/example_2.screen';
import { Example_3 } from './example_3/example_3.core';

export const ReactAdvanced: React.FC = () => {
  const Theme: MantineThemeOverride = {};

  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const [exampleInView, setExampleInView] = useState<string>('first');

  const handleChangeExample = (tab: string) => {
    setExampleInView(tab);
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withNormalizeCSS withGlobalStyles theme={{ ...Theme, colorScheme }}>
        <Tabs value={exampleInView} onTabChange={handleChangeExample}>
          <Tabs.List grow>
            <Tabs.Tab value="first">Example #1</Tabs.Tab>
            <Tabs.Tab value="second">Example #2</Tabs.Tab>
            <Tabs.Tab value="third">Example #3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="first">
            <Example_1 />
          </Tabs.Panel>
          <Tabs.Panel value="second">
            <Example_2 />
          </Tabs.Panel>
          <Tabs.Panel value="third">
            <Example_3 />
          </Tabs.Panel>
        </Tabs>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
