import {
  Box,
  Heading,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { translate } from '@docusaurus/Translate';
import type { FC } from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';

// components
import Attribution from '@site/src/components/Attribution';
import LinkButton from '@site/src/components/LinkButton';

// constants
import { DEFAULT_GAP } from '@site/src/constants';

// hooks
import useDesktopAndUp from '@site/src/hooks/useDesktopAndUp';
import usePrimaryColor from '@site/src/hooks/usePrimaryColor';

const Header: FC = () => {
  // hooks
  const desktopAndUp = useDesktopAndUp();
  const primaryColor = usePrimaryColor();
  // misc
  const itemHeightInRem = 3.6;
  const headerItems = [
    translate({ id: 'heading.identity' }),
    translate({ id: 'heading.payments' }),
    translate({ id: 'heading.lifestyle' }),
  ];
  const scrollingAnimation = keyframes`
    0% { margin-top: -${itemHeightInRem * 6}rem; }
    5% { margin-top: -${itemHeightInRem * 4}rem; }
    33% { margin-top: -${itemHeightInRem * 4}rem; }
    38% { margin-top: -${itemHeightInRem * 2}rem; }
    66% { margin-top: -${itemHeightInRem * 2}rem; }
    71% { margin-top: 0; }
    99.99% { margin-top: 0; }
    100% { margin-top: -${itemHeightInRem * 6}rem; }
  `;
  const defaultHeadingColor = 'whiteAlpha.900';

  return (
    <VStack
      align="center"
      as="header"
      bgColor="whiteAlpha.800"
      bgImage={`/images/${
        desktopAndUp ? 'header_background@2x.jpg' : 'header_background.jpg'
      }`}
      bgSize="cover"
      h="calc(100vh - var(--ifm-navbar-height))"
      justify="space-between"
    >
      <VStack
        justify="center"
        flexGrow={1}
        px={DEFAULT_GAP}
        spacing={DEFAULT_GAP - 2}
        w="full"
      >
        {/*title*/}
        <Stack
          align="center"
          direction={desktopAndUp ? 'row' : 'column'}
          justify="center"
          spacing={DEFAULT_GAP - 2}
          w="full"
        >
          <Heading
            color={defaultHeadingColor}
            fontSize="5xl"
            m={0}
            p={0}
            textAlign={desktopAndUp ? 'right' : 'center'}
            wordBreak="keep-all"
          >
            {translate({ id: 'heading.headerPrefix' })}
          </Heading>

          <Box h={`${itemHeightInRem}rem`} overflow="hidden">
            <List
              animation={`${scrollingAnimation} 5s linear infinite`}
              m={0}
              p={0}
            >
              {headerItems.map((value, index) => (
                <ListItem
                  h={`${itemHeightInRem}rem`}
                  key={`${value.toLowerCase().replace(' ', '_')}-${index}`}
                  mb={`${itemHeightInRem}rem`}
                  listStyleType="none"
                >
                  <Heading
                    color={primaryColor}
                    fontSize="5xl"
                    m={0}
                    p={0}
                    textAlign={desktopAndUp ? 'left' : 'center'}
                    w="full"
                  >
                    {value}
                  </Heading>
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>

        {/*subtitle*/}
        <Text
          color="white"
          fontSize="2xl"
          textAlign="center"
          w={desktopAndUp ? '50%' : 'full'}
        >
          {translate({ id: 'caption.header' })}
        </Text>

        {/*button*/}
        <LinkButton
          href="/#download"
          rightIcon={<IoArrowDownOutline />}
          size="lg"
        >
          {translate({ id: 'button.downloadNow' })}
        </LinkButton>
      </VStack>

      {/*attribution*/}
      <Stack align="flex-end" justify="center" w="full">
        <Attribution>
          <Text>
            {`${translate({ id: 'caption.imageBy' })} `}
            <Link
              _hover={{
                color: 'primaryDark.300',
              }}
              color="primaryDark.500"
              href="https://www.freepik.com/free-ai-image/abstract-fantasy-landscape-with-color-year-purple-tones_169082662.htm#fromView=search&page=2&position=1&uuid=d339e0f1-37a4-4fda-a7b9-f9f4a8a65172"
              isExternal={true}
            >
              freepik
            </Link>
          </Text>
        </Attribution>
      </Stack>
    </VStack>
  );
};

export default Header;
