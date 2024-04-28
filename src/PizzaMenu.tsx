import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";

interface PizzaMenuOption {
  title: string;
  subtitle?: string;
  ingredients: string;
  imageURL: string;
}

const pizzaMenuOptions: PizzaMenuOption[] = [
  {
    title: "Sweet Chili Pizza",
    ingredients:
      "Chicken, green peppers, pineapple, and red onions, topped with sweet chili sauce.",
    imageURL:
      "https://d257c1zjbj9yqq.cloudfront.net/general-uploads/_960x800_crop_center-center_none/Sweet-Chili-pizza-960x800.png",
  },
  {
    title: "Prairie",
    subtitle: "Veggie Pizza",
    ingredients:
      "Red Onions, Black Olives, Green Olives, Green Peppers, Spinach, Sliced Tomatoes",
    imageURL:
      "https://d257c1zjbj9yqq.cloudfront.net/general-uploads/_960x800_crop_center-center_none/Prairie-960x800.png",
  },
  {
    title: "Texan Taco",
    subtitle: "Guest Favorite",
    ingredients:
      "Beef, Lettuce, Tomatoes, Two Cheeses, Taco Sauce, Red Onions, Taco Chips",
    imageURL:
      "https://d257c1zjbj9yqq.cloudfront.net/general-uploads/Menu-Images/_960x800_crop_center-center_none/Texan_Taco.png",
  },
  {
    title: "Bronco",
    subtitle: "All Meat Pizza",
    ingredients: "Beef, Sausage, Pepperoni, Diced Ham, Bacon Pieces",
    imageURL:
      "https://d257c1zjbj9yqq.cloudfront.net/general-uploads/Menu-Images/_800x667_crop_center-center_none/Pepperoni.png",
  },
  {
    title: "Buffalo Chicken",
    ingredients: "Chicken, Hot Sauce, Ranch Dressing",
    imageURL:
      "https://d257c1zjbj9yqq.cloudfront.net/general-uploads/Menu-Images/_960x800_crop_center-center_none/Buffalo-Chicken-960x800.png",
  },
  {
    title: "Chicken Bacon Ranch",
    ingredients: "Chicken, Bacon, Ranch Dressing, Tomatoes",
    imageURL:
      "https://d257c1zjbj9yqq.cloudfront.net/general-uploads/Menu-Images/_960x800_crop_center-center_none/Chicken_Bacon_Ranch.png",
  },
  {
    title: "Stampede",
    ingredients:
      "Diced Ham, Pepperoni, Sausage, Beef, Mushrooms, Green and Black Olives, Red Onions, Green Peppers",
    imageURL:
      "https://d257c1zjbj9yqq.cloudfront.net/general-uploads/Menu-Images/_960x800_crop_center-center_none/Stampede-960x800.png",
  },
];

function PizzaMenu() {
  return (
    <Box backgroundColor="#F2F2F2" minHeight="600px" py={8}>
      <Box width="70%" mx="auto">
        <Text fontFamily="Holtwood One SC" fontSize="3xl" py={2}>
          Pizza Menu
        </Text>
        <Text pb={4}>
          Proudly serving{" "}
          <a href="https://pizzaranch.com/" target="_blank">
            Pizza Ranch pizza
          </a>
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
      <Box px={2} py={4}>
        <Text fontFamily="Holtwood One SC">{title}</Text>
        {subtitle && (
          <Text
            px={4}
            py={2}
            fontWeight="bold"
            color="#ffffff"
            bgColor="#D90404"
            borderRadius={12}
          >
            {subtitle}
          </Text>
        )}
        <Text py={2}>{ingredients}</Text>
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
