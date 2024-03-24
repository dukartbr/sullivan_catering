import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";

function Nav() {
  return (
    <Box bgColor="#D90404" color="white" py={3} fontFamily="Holtwood One SC">
      <Container>
        <Flex>
          <Text>Sullivan Catering</Text>
          <Spacer />
          <Flex>
            <Text mx={2}>Pizza</Text>
            <Text mx={2}>Ice Cream</Text>
            <Text mx={2}>Contact</Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Nav;
