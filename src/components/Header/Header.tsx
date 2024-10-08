import { Heading, Link, Stack, Text, VStack } from '@chakra-ui/react';
import type { FC } from 'react';

// components
import Attribution from '@site/src/components/Attribution';
import LinkButton from '@site/src/components/LinkButton';

// constants
import { DEFAULT_GAP } from '@site/src/constants';

const Header: FC = () => {
  const fontColor = 'whiteAlpha.800';

  return (
    <VStack
      align="center"
      as="header"
      bgColor={fontColor}
      bgImage="/images/header_background.jpg"
      bgSize="cover"
      h="calc(100vh - var(--ifm-navbar-height))"
      justify="space-between"
    >
      <VStack
        justify="center"
        flexGrow={1}
        maxW="700px"
        spacing={DEFAULT_GAP - 2}
        w="full"
      >
        {/*title*/}
        <Heading color={fontColor} fontSize="5xl" textAlign="center" w="full">
          {`Your Ultimate AVM Utility Wallet`}
        </Heading>

        {/*subtitle*/}
        <Text color={fontColor} fontSize="2xl" textAlign="center" w="full">
          {`An AVM wallet that goes beyond just DeFi.`}
        </Text>

        {/*button*/}
        <LinkButton href="/#download" size="lg">
          Download Now
        </LinkButton>
      </VStack>

      {/*attribution*/}
      <Stack align="flex-end" justify="center" w="full">
        <Attribution>
          <Text>
            Image by{` `}
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
