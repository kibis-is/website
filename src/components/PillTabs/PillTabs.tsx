import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  type TabProps,
  Tabs,
} from '@chakra-ui/react';
import { type FC } from 'react';

// constants
import { DEFAULT_GAP } from '@site/src/constants';

// hooks
import usePrimaryButtonTextColor from '@site/src/hooks/usePrimaryButtonTextColor';
import usePrimaryColor from '@site/src/hooks/usePrimaryColor';
import usePrimaryColorScheme from '@site/src/hooks/usePrimaryColorScheme';

// types
import type { IProps } from './types';

const PillTabs: FC<IProps> = ({ tabs }) => {
  // hooks
  const primaryButtonTextColor = usePrimaryButtonTextColor();
  const primaryColor = usePrimaryColor();
  const primaryColorScheme = usePrimaryColorScheme();
  // misc
  const contents = tabs.map(({ content }) => content);
  const titles = tabs.map(({ title }) => title);

  return (
    <Tabs
      align="center"
      colorScheme={primaryColorScheme}
      isLazy={true}
      variant="unstyled"
      w="full"
    >
      <TabList>
        {titles.map((value, index, array) => {
          const defaultProps: TabProps = {
            _selected: {
              bg: primaryColor,
              color: primaryButtonTextColor,
            },
            borderBottomWidth: 1,
            borderColor: primaryColor,
            borderLeftWidth: 1,
            borderTopWidth: 1,
            key: `pill-switch-tab-${index}`,
          };

          // the first item
          if (index <= 0) {
            return (
              <Tab {...defaultProps} borderStartRadius="full">
                {value}
              </Tab>
            );
          }

          // the last item
          if (index >= array.length - 1) {
            return (
              <Tab
                {...defaultProps}
                borderEndRadius="full"
                borderRightWidth={1}
              >
                {value}
              </Tab>
            );
          }

          //
          return <Tab {...defaultProps}>{value}</Tab>;
        })}
      </TabList>

      <TabPanels>
        {contents.map((value, index) => (
          <TabPanel key={`pill-switch-content-${index}`} mt={DEFAULT_GAP * 2}>
            {value}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default PillTabs;
