import { 
  Flex, 
  Text, 
  Image, 
  HStack, 
  InputGroup, 
  InputLeftElement, 
  Input, 
  Icon, 
  Box,
  Button
} from '@chakra-ui/react';
import { RiHandbagLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';

export function Header() {
  return (
    <Flex h="28" align="center" justify="space-between" paddingInline="16">
      <HStack h="75%" spacing="4">
        <Image src="/images/logo.png" h="100%" />
        <Text fontSize="xl" fontFamily="Oswald" fontWeight="bold">STARBUCKS</Text>
      </HStack>

      <HStack spacing="16">
        <Button 
          as="a"
          bg="transparent"
          cursor="pointer"
          _hover={{
            bgColor: 'transparent',
          }}
        >
          <Text fontSize="md" fontWeight="500">Trending</Text>
        </Button>
        <Button 
          as="a"
          bg="transparent"
          cursor="pointer"
          _hover={{
            bgColor: 'transparent',
          }}
        >
          <Text fontSize="md" fontWeight="500">Rewards</Text>
        </Button>
        <Button 
          as="a"
          bg="transparent"
          cursor="pointer"
          _hover={{
            bgColor: 'transparent',
          }}
        >
          <Text fontSize="md" fontWeight="500">Gift Cards</Text>
        </Button>
        <Button 
          as="a"
          bg="transparent"
          cursor="pointer"
          _hover={{
            bgColor: 'transparent',
          }}
        >
          <Text fontSize="md" fontWeight="500">Reserve</Text>
        </Button>
        <Button 
          as="a"
          bg="transparent"
          cursor="pointer"
          _hover={{
            bgColor: 'transparent',
          }}
        >
          <Text fontSize="md" fontWeight="500">Delivery</Text>
        </Button>
      </HStack>

      <HStack spacing="8">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="gray.900" />}
          />
          <Input bg="white" borderRadius="full" fontSize="md" placeholder="Search" focusBorderColor="green.600"/>
        </InputGroup>

        <Flex align="center" position="relative">
          <Icon as={RiHandbagLine} fontSize="2xl"/>
          <Box 
            borderRadius="full"
            height="3"
            width="3"
            bg="orange.500"
            border="2px solid #EFE4DC"
            position="absolute"
            right="0"
            top="0" 
          />
        </Flex>
      </HStack>
    </Flex>
  );
}