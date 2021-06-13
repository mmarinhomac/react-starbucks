import { 
  Flex, 
  Text, 
  VStack, 
  Button, 
  Icon, 
  Image,
  HStack,
  Box
} from '@chakra-ui/react';
import { MdKeyboardArrowRight, MdAdd } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

export function Home() {
  return (
    <Flex direction="column" paddingInline="16">
      <Flex mt="10" direction="row" align="center">
        <VStack align="flex-start" maxWidth="30vw" spacing="8">
          <VStack align="flex-start" spacing="-4">
            <Text fontSize="68" fontWeight="900">Midnight</Text>
            <Text fontSize="68" fontWeight="900">Frappuccino</Text>
          </VStack>

          <Text fontSize="xl">The Midnight Mint Mocha Frappuccino features extra dark cocoa blended with Frappuccino Roast coffe.</Text>
          <Text fontSize="48" fontWeight="700">$ 8.60</Text>

          <Button 
            borderRadius="full" 
            colorScheme="green" 
            bg="purple.900" 
            color="orange.50" 
            paddingBlock="7" 
            paddingInline="14"
          >
            <Text>Buy Now</Text>

            <Icon 
              ml="4"
              width="5" 
              height="5"
              bg="orange.500" 
              borderRadius="full"
              as={MdKeyboardArrowRight}
            />
          </Button>
        </VStack>

        <VStack width="40vw" position="relative">
          <Image src="/images/midnight-frappuccino.svg" width="70%"/>
          <HStack
            position="absolute"
            left="0"
            bottom="20"
            height="20"
            spacing="4"
            bg="white"
            borderRadius="full"
            paddingBlock="3"
            paddingInline="4"
          >
            <Image src="/images/heart.svg" height="100%"/>
            <Image src="/images/avatar-01.png" height="100%"/>
            <Image src="/images/avatar-02.png" height="100%"/>
            <Image src="/images/avatar-03.png" height="100%"/>
            <Image src="/images/avatar-04.png" height="100%"/>
          </HStack>
        </VStack>

        <VStack ml="auto" mr="20" spacing="10">
          <HStack width="100%">
            <Box 
              borderRadius="full" 
              width="20" 
              height="20" 
              bg="white" 
              display="flex"
              alignContent="center"
              justifyContent="center"
              mr="4"
            >
              <Image src="/images/coffee.svg" width="60%" />
            </Box>
            <VStack align="flex-start">
              <Text fontWeight="900">Sippy cups</Text>
              <Text>Are the New Norm <br/>for iced coffe</Text>
            </VStack>
          </HStack>
          <HStack width="100%">
            <Box 
              borderRadius="full" 
              width="20" 
              height="20" 
              bg="white" 
              display="flex"
              alignContent="center"
              justifyContent="center"
              mr="4"
            >
              <Image src="/images/donut.svg" width="60%" />
            </Box>
            <VStack align="flex-start">
              <Text fontWeight="900">Donut</Text>
              <Text>Have a donut with <br/>the frappuccino</Text>
            </VStack>
          </HStack>
          <HStack width="100%">
            <Box 
              borderRadius="full" 
              width="20" 
              height="20" 
              bg="white" 
              display="flex"
              alignContent="center"
              justifyContent="center"
              mr="4"
            >
              <Image src="/images/cookie.svg" width="60%" />
            </Box>
            <VStack align="flex-start">
              <Text fontWeight="900">Cookies</Text>
              <Text>Enjoy our sugar <br/>free cookies</Text>
            </VStack>
          </HStack>
        </VStack>
      </Flex>

      <Flex
        mt="20" 
        justifyContent="space-between"
        position="relative"
        backgroundImage="/images/bg-drinks.png"
        backgroundSize="cover"
        backgroundPosition="100% -40%"
        backgroundRepeat="no-repeat"
        paddingInline="44"
        paddingBlock="16"
      >
        <VStack>
          <HStack position="relative">
            <Image height="80" src="/images/caramel-ribbon.svg" />
            <HStack
              bg="white"
              paddingBlock="2"
              paddingInline="4"
              borderRadius="md"
              position="absolute"
              bottom="10"
              right="10"
            >
              <Text fontWeight="900">4.6</Text>
              <Icon as={FaStar} color="yellow.500"/>
            </HStack>
          </HStack>
          <Text color="orange.50" fontWeight="900">Caramel Ribbon</Text>
          <Button 
            bg="transparent" 
            _hover={{
              bgColor: 'transparent',
            }}
          >
            <Text mr="2" color="orange.50">Add to order</Text>
            <Icon color="orange.50" fontSize="16" as={MdAdd}/>
          </Button>
        </VStack>
        <VStack>
          <HStack position="relative">
            <Image height="80" src="/images/strawberry-funnel.svg" />
            <HStack
              bg="white"
              paddingBlock="2"
              paddingInline="4"
              borderRadius="md"
              position="absolute"
              bottom="10"
              right="10"
            >
              <Text fontWeight="900">4.5</Text>
              <Icon as={FaStar} color="yellow.500"/>
            </HStack>
          </HStack>
          <Text color="orange.50" fontWeight="900">Strawberry Funnel</Text>
          <Button 
            bg="transparent" 
            _hover={{
              bgColor: 'transparent',
            }}
          >
            <Text mr="2" color="orange.50">Add to order</Text>
            <Icon color="orange.50" fontSize="16" as={MdAdd}/>
          </Button>
        </VStack>
        <VStack>
          <HStack position="relative">
            <Image height="80" src="/images/caramel-frappuccino.svg" />
            <HStack
              bg="white"
              paddingBlock="2"
              paddingInline="4"
              borderRadius="md"
              position="absolute"
              bottom="10"
              right="10"
            >
              <Text fontWeight="900">5.0</Text>
              <Icon as={FaStar} color="yellow.500"/>
            </HStack>
          </HStack>
          <Text color="orange.50" fontWeight="900">Caramel Frappuccino</Text>
          <Button 
            bg="transparent" 
            _hover={{
              bgColor: 'transparent',
            }}
          >
            <Text mr="2" color="orange.50">Add to order</Text>
            <Icon color="orange.50" fontSize="16" as={MdAdd}/>
          </Button>
        </VStack>
      </Flex>
    </Flex>
  )
}