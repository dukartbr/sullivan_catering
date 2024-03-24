import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";

interface PizzaMenuOption {
  title: string;
  subtitle: string;
  ingredients: string;
  imageURL: string;
}

const pizzaMenuOptions: PizzaMenuOption[] = [
  {
    title: "Pepperoni",
    subtitle: "A classic!",
    ingredients: "Pepperoni, Cheese, Tomato Sause",
    imageURL:
      "https://d257c1zjbj9yqq.cloudfront.net/general-uploads/Menu-Images/_800x667_crop_center-center_none/Pepperoni.png",
  },
  {
    title: "Cheese",
    subtitle: "A classic!",
    ingredients: "Cheese, Tomato Sause",
    imageURL:
      "https://d257c1zjbj9yqq.cloudfront.net/general-uploads/Menu-Images/_800x667_crop_center-center_none/Pepperoni.png",
  },
  {
    title: "Sausage",
    subtitle: "A classic!",
    ingredients: "Sausage, Tomato Sause",
    imageURL:
      "https://d257c1zjbj9yqq.cloudfront.net/general-uploads/Menu-Images/_800x667_crop_center-center_none/Pepperoni.png",
  },
  {
    title: "Veggie",
    subtitle: "A classic!",
    ingredients: "Veggie, Tomato Sause",
    imageURL:
      "https://d257c1zjbj9yqq.cloudfront.net/general-uploads/Menu-Images/_800x667_crop_center-center_none/Pepperoni.png",
  },
];

function PizzaMenu() {
  return (
    <Box backgroundColor="#F2F2F2" minHeight="600px" py={2}>
      <Box width="70%" mx="auto">
        <Text fontFamily="Holtwood One SC" fontSize="3xl" py={4}>
          Pizza Menu
        </Text>
        <Flex width="100%" px={8}>
          <Box
            height="580px"
            overflowY="scroll"
            width="70%"
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
            {pizzaMenuOptions.map((pizza) => (
              <PizzaMenuItem {...pizza} />
            ))}
          </Box>
          <Box width="30%" px={3}>
            <PaymentOption />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default PizzaMenu;

function PizzaMenuItem({
  title,
  subtitle,
  imageURL,
  ingredients,
}: PizzaMenuOption) {
  return (
    <Flex
      bgColor="#ffffff"
      boxShadow="xl"
      my={5}
      borderRadius={16}
      width="100%"
      px={6}
      py={2}
    >
      <Image height="200px" src={imageURL} />
      <Box>
        <Text fontFamily="Holtwood One SC">{title}</Text>
        <Text>{subtitle}</Text>
        <Text>{ingredients}</Text>
      </Box>
    </Flex>
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
                  {qty.toString()} Pizzas........${price}
                </Text>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Spacer />
      <Box
        bgColor="green.300"
        color="white"
        fontWeight="bold"
        textTransform="uppercase"
        borderRadius={8}
        textAlign="center"
        p={4}
      >
        <Text>Free Pizza for the Bride & Groom!</Text>
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
