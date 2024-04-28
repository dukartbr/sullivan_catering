import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";

interface IceCreamMenuOption {
  title: string;
  imageURL: string;
}

const iceCreamMenuOptions: IceCreamMenuOption[] = [
  {
    title: "Strawberry",
    imageURL: "https://pngimg.com/uploads/ice_cream/ice_cream_PNG20987.png",
  },
  {
    title: "Vanilla",
    imageURL: "https://pngimg.com/uploads/ice_cream/ice_cream_PNG20987.png",
  },
  {
    title: "Chocolate",
    imageURL: "https://pngimg.com/uploads/ice_cream/ice_cream_PNG20987.png",
  },
  {
    title: "Cotton Candy",
    imageURL: "https://pngimg.com/uploads/ice_cream/ice_cream_PNG20987.png",
  },
  {
    title: "Strawberry",
    imageURL: "https://pngimg.com/uploads/ice_cream/ice_cream_PNG20987.png",
  },
  {
    title: "Vanilla",
    imageURL: "https://pngimg.com/uploads/ice_cream/ice_cream_PNG20987.png",
  },
  {
    title: "Chocolate",
    imageURL: "https://pngimg.com/uploads/ice_cream/ice_cream_PNG20987.png",
  },
  {
    title: "Cotton Candy",
    imageURL: "https://pngimg.com/uploads/ice_cream/ice_cream_PNG20987.png",
  },
  {
    title: "Strawberry",
    imageURL: "https://pngimg.com/uploads/ice_cream/ice_cream_PNG20987.png",
  },
  {
    title: "Vanilla",
    imageURL: "https://pngimg.com/uploads/ice_cream/ice_cream_PNG20987.png",
  },
  {
    title: "Chocolate",
    imageURL: "https://pngimg.com/uploads/ice_cream/ice_cream_PNG20987.png",
  },
  {
    title: "Cotton Candy",
    imageURL: "https://pngimg.com/uploads/ice_cream/ice_cream_PNG20987.png",
  },
];

function IceCreamMenu({ isMobile }: { isMobile: boolean }) {
  return (
    <Box backgroundColor="#F2F2F2" minHeight="600px" py={8} px={2}>
      <Box width={isMobile ? "100%" : "70%"} mx="auto">
        <Text fontFamily="Holtwood One SC" fontSize="3xl" py={4}>
          Ice Cream Menu
        </Text>
        <Flex width="100%" px={8} direction={isMobile ? "column" : "row"}>
          <Grid
            height={isMobile ? "auto" : "580px"}
            overflowY={isMobile ? "unset" : "scroll"}
            width={isMobile ? "100%" : "70%"}
            gap={2}
            templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)"}
            px={5}
            css={{
              WebkitOverflowScrolling: "touch", // Enable smooth scrolling on iOS devices
              "&::-webkit-scrollbar": {
                width: "0em", // Adjust the width of the scrollbar
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent", // Set the color of the scrollbar thumb
              },
            }}
          >
            {iceCreamMenuOptions.map((iceCream) => (
              <IceCreamMenuItem {...iceCream} />
            ))}
          </Grid>
          <Box width={isMobile ? "100%" : "30%"} px={3}>
            <PaymentOption />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default IceCreamMenu;

function IceCreamMenuItem({ title, imageURL }: IceCreamMenuOption) {
  return (
    <GridItem
      bgColor="white"
      boxShadow="xl"
      my={5}
      borderRadius={16}
      width="100%"
      px={6}
      py={2}
      textAlign="center"
    >
      <Image src={imageURL} />
      <Text fontFamily="Holtwood One SC">{title}</Text>
    </GridItem>
  );
}

function PaymentOption() {
  return (
    <Flex
      backgroundColor="white"
      boxShadow="xl"
      height="580px"
      p={3}
      fontWeight="bold"
      borderRadius={16}
      direction="column"
    >
      <Text textAlign="center" fontFamily="Holtwood One SC">
        Payment Options
      </Text>
      <Box mt={4} px={2}>
        {paymentOptions.map(({ title, options }) => (
          <Box my={3}>
            <Text color="green.500">{title.toUpperCase()}</Text>
            <Box>
              {options.map(({ qty, price }) => (
                <Text my={1}>
                  {qty.toString()} Gal........${price}
                </Text>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Spacer />
      <Box
        bgColor="#D90404"
        color="white"
        fontWeight="bold"
        textTransform="uppercase"
        borderRadius={8}
        textAlign="center"
        p={4}
      >
        <Text>$25 off with pizza package!</Text>
      </Box>
    </Flex>
  );
}

const paymentOptions = [
  {
    title: "cash",
    options: [
      {
        qty: 10,
        price: 225,
      },
      {
        qty: 15,
        price: 325,
      },
      {
        qty: 20,
        price: 400,
      },
    ],
  },
  {
    title: "card",
    options: [
      {
        qty: 10,
        price: 250,
      },
      {
        qty: 15,
        price: 350,
      },
      {
        qty: 20,
        price: 450,
      },
    ],
  },
];
