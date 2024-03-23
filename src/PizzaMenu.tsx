import { Box, Flex, Image, Text } from "@chakra-ui/react";

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
    <Box backgroundColor="#F2F2F2" height="600px">
      <Box width="70%" mx="auto">
        <Text fontFamily="Holtwood One SC" fontSize="3xl">
          Pizza Menu
        </Text>
        <Flex width="100%">
          <Box height="580px" overflow="scroll" width="70%">
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
    <Box
      backgroundColor="white"
      boxShadow="xl"
      height="580px"
      px={3}
      fontWeight="bold"
      textAlign="center"
      borderRadius={16}
    >
      <Text>Payment Options</Text>
    </Box>
  );
}
